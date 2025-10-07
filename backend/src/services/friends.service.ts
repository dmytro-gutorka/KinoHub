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

    const isRequestPending = await  this.ds
      .createQueryBuilder(FriendRequest, 'fr')
      .where(
        '((fr.requester_id = :requesterId AND fr.receiver_id = :receiverId)' +
          ' OR ' +
        '(fr.requester_id = :receiverId AND fr.receiver_id = :requesterId))' +
        ' AND ' +
        'fr.status = :status',
        { requesterId, receiverId, status: 'pending'  }
      )
      .getExists();

    if (isRequestPending) throw HttpError.Conflict('Friend request already exists');

    const areUsersFriends = await this.ds
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

    if (areUsersFriends) throw HttpError.Conflict('You are already friends');

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

    await this.ds.transaction(async (em) => {
      const friendRequest = await this.ds
        .createQueryBuilder(FriendRequest, 'fr')
        .setLock("pessimistic_write")
        .where('fr.id = :requestId AND fr.requester_id = :userId  AND fr.status = :status',
          { requestId, userId, status: 'pending' })
        .getExists();

      if (!friendRequest) throw HttpError.Conflict('Friend request does not exist or is not pending');

      await this.ds.createQueryBuilder()
        .insert()
        .into(Friendship)
        .values([
          { userId: userId, friendId: friendId },
          { userId: friendId, friendId: userId },
        ])
        .orIgnore()
        .execute();

      await this.ds
        .createQueryBuilder(FriendRequest, 'fr')
        .update()
        .set({ status: 'accepted' as const })
        .where('id = :requestId', { requestId })
        .execute();
    });
  }
}

export const friendsService = new FriendsService(AppDataSource);
