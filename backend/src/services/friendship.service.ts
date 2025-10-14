import { friendshipRepository } from '../config/repositories.js';
import { DataSource, In } from 'typeorm';
import { AppDataSource } from '../config/db.js';
import { usersService } from './user.service.js';
import { Friendship } from '../entity/Friendship.js';
import { HttpError } from '../errors/HttpError.js';
// eslint-disable-next-line n/no-extraneous-import
import { UserPaginatedListDTO } from '@kinohub/schemas';

class FriendshipService {
  constructor(private readonly ds: DataSource) {}

  async getFriends(
    userId: number,
    search: string,
    page: number
  ): Promise<UserPaginatedListDTO | never[]> {
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
    const firstRelation = await friendshipRepository.findOneBy({
      userId: userId,
      friendId: friendId,
    });
    const secondRelation = await friendshipRepository.findOneBy({
      userId: userId,
      friendId: friendId,
    });

    await friendshipRepository.findOneBy({ userId: friendId, friendId: userId });

    if (!firstRelation && !secondRelation) throw HttpError.NotFound('Friendship not found');

    await friendshipRepository.delete({ userId: userId, friendId: friendId });
    await friendshipRepository.delete({ userId: friendId, friendId: userId });
  }
}

export const friendshipService = new FriendshipService(AppDataSource);
