import { friendshipRepository } from '../config/repositories.js';
import { DataSource, Equal, In, Or } from 'typeorm';
import { AppDataSource } from '../config/db.js';
import { Friendship } from '../entity/Friendship.js';
import { HttpError } from '../errors/HttpError.js';
import { usersService } from './user.service.js';
// eslint-disable-next-line n/no-extraneous-import
import { UserListItemDTO } from '@kinohub/schemas';

class FriendshipService {
  constructor(private readonly ds: DataSource) {}

  async getFriends(userId: number, search: string, page: number): Promise<UserListItemDTO[]> {
    const friends = await friendshipRepository.find({ where: { userId }, select: ['friendId'] });
    const friendIds: number[] = friends.map((f) => f.friendId);

    if (friendIds.length === 0) return [];

    return await usersService.getUsers(userId, search, page, friendIds);
  }

  async getMutualFriends(userId: number, friendId: number): Promise<Friendship[]> {
    const myFriends = await friendshipRepository.find({ where: { userId }, select: ['friendId'] });
    const myFriendIds: number[] = myFriends.map((f) => f.friendId);

    return await friendshipRepository.find({
      where: { userId: friendId, friendId: In(myFriendIds) },
    });
  }

  async deleteFriend(userId: number, friendId: number): Promise<void> {
    const friend = await friendshipRepository.findOne({
      where: { userId: Or(Equal(userId), Equal(friendId)) },
    });

    if (!friend) throw HttpError.NotFound('Friendship not found');

    await friendshipRepository.delete({ userId: Or(Equal(userId), Equal(friendId)) });
  }
}

export const friendshipService = new FriendshipService(AppDataSource);
