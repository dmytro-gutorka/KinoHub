import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';
import { PAGINATION_LIMITS } from '../utils/constants/SHARED.js';
// eslint-disable-next-line n/no-extraneous-import
import { UserListItem } from '@kinohub/schemas';

class UserService {
  constructor(private readonly ds: DataSource) {}

  async getUsers(search: string, page: number) {
    const firstName = search.split(' ')[0] || '';
    const lastName = search.split(' ')[1] || '';

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
      .where('profile.firstName ILIKE :firstName', { firstName: `%${firstName}%` })
      .andWhere('profile.lastName ILIKE :lastName', { lastName: `%${lastName}%` })
      .offset(PAGINATION_LIMITS.USERS * (page - 1))
      .limit(PAGINATION_LIMITS.USERS)
      .getRawMany();

    return rawUsers.map((user) => UserListItem.parse(user));
  }
}

export const usersService = new UserService(AppDataSource);
