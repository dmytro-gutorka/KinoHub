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
        '(fs.user_id = :userId AND fs.friend_id = user.id)' +
          ' OR ' +
          '(fs.user_id = user.id AND fs.friend_id = :userId)'
      )
      .getQuery();

    const isPendingOutgoingSub = this.ds
      .createQueryBuilder()
      .subQuery()
      .select('1')
      .from(FriendRequest, 'fr')
      .where('fr.status = :pending AND fr.requester_id = :userId AND fr.receiver_id = user.id')
      .getQuery();

    const isPendingIncomingSub = this.ds
      .createQueryBuilder()
      .subQuery()
      .select('1')
      .from(FriendRequest, 'fr')
      .where('fr.status = :pending AND fr.requester_id = user.id AND fr.receiver_id = :userId')
      .getQuery();

    const friendRequestIdSub = this.ds
      .createQueryBuilder()
      .subQuery()
      .select('fr.id::int', 'friendRequestId')
      .from(FriendRequest, 'fr')
      .where(
        'fr.status = :pending AND ' +
          '((fr.requester_id = :userId AND fr.receiver_id = user.id)' +
          ' OR ' +
          '(fr.requester_id = user.id AND fr.receiver_id = :userId))'
      )
      .getQuery();

    const mutualFriends = this.ds
      .createQueryBuilder()
      .subQuery()
      .from(Friendship, 'f1')
      .innerJoin(Friendship, 'f2', 'f1.friend_id = f2.friend_id')
      .select('COUNT(DISTINCT f1.friend_id)::int')
      .where('f1.user_id = :userId')
      .andWhere('f2.user_id = "user".id')
      .andWhere('f2.friend_id <> :userId')
      .getQuery();

    const qb = this.ds
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
        'auth.isEmailConfirmed AS "isEmailConfirmed"',
      ])
      .addSelect(mutualFriends, 'mutualFriendsCount')
      .addSelect(friendRequestIdSub, 'friendRequestId')
      .addSelect(watchedMoviesCountSub, 'watchedMediaCount')
      .addSelect(`EXISTS(${isFriendSub})`, 'isFriend')
      .addSelect(`EXISTS(${isPendingOutgoingSub})`, 'isPendingOutgoing')
      .addSelect(`EXISTS(${isPendingIncomingSub})`, 'isPendingIncoming')
      .where('profile.firstName ILIKE :firstName', { firstName: `%${firstName}%` })
      .andWhere('profile.lastName ILIKE :lastName', { lastName: `%${lastName}%` })
      .andWhere('user.id <> :userId', { userId })
      .setParameters({ userId, pending: 'pending' })
      .offset(PAGINATION_LIMITS.USERS * (page - 1))
      .limit(PAGINATION_LIMITS.USERS);

    const rawUsers = await qb.getRawMany();
    return rawUsers.map((user) => UserListItem.parse(user));
  }
}

export const usersService = new UserService(AppDataSource);
