import { friendBlackListRepository, friendsRequestRepository } from '../config/repositories.js';
import { HttpError } from '../errors/HttpError.js';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../config/db.js';
import { FriendRequest } from '../entity/FriendRequest.js';
import { Friendship } from '../entity/Friendship.js';

class FriendsService {
  constructor(private readonly ds: DataSource) {}

  async getFriends() {}

  async deleteFriend() {}

  async createFriendRequest(requesterId: number, receiverId: number): Promise<void> {
    if (requesterId === receiverId)
      throw HttpError.BadRequest('You cannot send request to yourself');

    const isRequested = await this.ds
      .createQueryBuilder(FriendRequest, 'fr')
      .where(
        '(fr.requester_id = :requesterId AND fr.receiver_id = :receiverId)' +
          ' OR ' +
          '(fr.requester_id = :receiverId AND fr.receiver_id = :requesterId)',
        { requesterId, receiverId }
      )
      .getExists();

    if (isRequested) throw HttpError.Conflict('Friend request already exists');

    const areFriends = await this.ds
      .createQueryBuilder(Friendship, 'f')
      .where(
        '(f.user_id = :requesterId AND friend_id = :receiverId)' +
          ' OR ' +
          '(f.user_id = :receiverId AND friend_id = :requesterId)',
        {
          requesterId,
          receiverId,
        }
      )
      .getExists();

    if (areFriends) throw HttpError.Conflict('You are already friends');

    const isUserBlocked = await friendBlackListRepository.existsBy({
      blockerId: receiverId,
      blockedId: requesterId,
    });

    if (isUserBlocked)
      throw HttpError.Forbidden('This user has blocked you. You cannot send request');

    const friendRequest = friendsRequestRepository.create({
      requesterId,
      receiverId,
    });

    await friendsRequestRepository.save(friendRequest);
  }

  async acceptFriendRequest(userId: number, friendId: number, requestId: number): Promise<void> {
    if (userId === friendId) throw HttpError.BadRequest('You cannot accept request to yourself');

    await this.ds.transaction(async (entityManager) => {
      const areFriends = await this.ds
        .createQueryBuilder(Friendship, 'f')
        .where(
          '(f.user_id = :userId AND friend_id = :friendId)' +
            ' OR ' +
            '(f.user_id = :friendId AND friend_id = :userId)',
          { userId, friendId }
        )
        .getExists();

      if (areFriends) throw HttpError.Conflict('You are already friends');

      await this.ds
        .createQueryBuilder()
        .insert()
        .into(Friendship)
        .values([
          { userId: userId, friendId: friendId },
          { userId: friendId, friendId: userId },
        ])
        .orIgnore()
        .execute();

      await entityManager.delete(FriendRequest, { id: requestId });
    });
  }
}

export const friendsService = new FriendsService(AppDataSource);
