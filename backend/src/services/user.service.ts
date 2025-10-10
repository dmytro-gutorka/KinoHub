import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';
import { PAGINATION_LIMITS } from '../utils/constants/SHARED.js';
// eslint-disable-next-line n/no-extraneous-import
import { UserListItem } from '@kinohub/schemas';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { Friendship } from '../entity/Friendship.js';
import { FriendRequest } from '../entity/FriendRequest.js';

class UserService {
  constructor(private readonly ds: DataSource) {}

  async getUsers(userId: number, search: string, page: number) {
    const firstName = search.split(' ')[0] || '';
    const lastName = search.split(' ')[1] || '';

    console.log(userId);

    const watchedMoviesCountSub = this.ds
      .createQueryBuilder()
      .subQuery()
      .select('COUNT(*)::int', 'watchedMediaCount')
      .from(MediaUserAction, 'mua')
      .where('mua.userId = user.id')
      .andWhere('mua.isWatched = true')
      .getQuery();

    const isFriendSub = this.ds
      .createQueryBuilder()
      .subQuery()
      .select('1')
      .from(Friendship, 'fs')
      .where(
        '(fs.user_id = :userId AND friend_id = user.id) OR (fs.user_id = user.id AND friend_id = :userId) '
      )
      .getQuery();

    const hasPendingStatusSub = this.ds
      .createQueryBuilder()
      .subQuery()
      .select('1')
      .from(FriendRequest, 'fr')
      .where(
        'fr.status = "pending" ' +
          'AND (fr.requester_id = :userId AND fr.receiver_id = user.id) ' +
          'OR (fr.requester_id = user.id AND fr.receiver_id = :userId)'
      );

    const isPendingOutgoingSub = this.ds
      .createQueryBuilder()
      .subQuery()
      .select('1')
      .from(FriendRequest, 'fr')
      .where('fr.status = "pending" AND fr.requester_id = :userId AND fr.receiver_id = user.id');

    const rawUsers = await this.ds
      .createQueryBuilder(User, 'user')
      .leftJoin('user.profile', 'profile')
      .leftJoin('user.userAuth', 'auth')
      .select([
        'user.id AS "id"',
        'user.username AS "username"',
        'user.createdAt AS "registeredAt"',
        'profile.firstName AS "firstName"',
        'profile.lastName AS "lastName"',
        'profile.avatarUrl AS "avatarUrl"',
        'auth.isEmailConfirmed "isEmailConfirmed"',
      ])
      .addSelect(watchedMoviesCountSub, 'watchedMediaCount')
      .addSelect(`EXISTS(${isFriendSub})`, 'isFriend')
      // .addSelect(`EXISTS(${hasPendingStatusSub})`, 'hasPendingStatus')
      .where('profile.firstName ILIKE :firstName', { firstName: `%${firstName}%` })
      .andWhere('user.id <> :userId', { userId })
      .andWhere('profile.lastName ILIKE :lastName', { lastName: `%${lastName}%` })
      .offset(PAGINATION_LIMITS.USERS * (page - 1))
      .limit(PAGINATION_LIMITS.USERS)
      .setParameters({ userId })
      .getRawMany();

    return rawUsers;
    // return rawUsers.map((user) => UserListItem.parse(user));
  }
}

export const usersService = new UserService(AppDataSource);
