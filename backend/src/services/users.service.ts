import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';
import { UserListItem } from '../dto/users.dto.js';

class UsersService {
  constructor(private readonly ds: DataSource) {
  }

  async getUsers() {
    const rawUsers = await this.ds.createQueryBuilder(User, 'user')
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
      .getRawMany();

    return rawUsers.map(user => UserListItem.parse(user));
  }
}


export const usersService = new UsersService(AppDataSource);