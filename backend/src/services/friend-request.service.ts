import { friendBlackListRepository, friendsRequestRepository } from '../config/repositories.js';
import { AppDataSource } from '../config/db.js';
import { FriendRequest } from '../entity/FriendRequest.js';
import { DataSource } from 'typeorm';
import { Friendship } from '../entity/Friendship.js';
import { HttpError } from '../errors/HttpError.js';
import { usersService } from './user.service.js';
// eslint-disable-next-line n/no-extraneous-import
import { UserListItemDTO } from '@kinohub/schemas';

class FriendRequestService {
  constructor(private readonly ds: DataSource) {}

  async createFriendRequest(requesterId: number, receiverId: number): Promise<void> {
    if (requesterId === receiverId)
      throw HttpError.BadRequest('You cannot send request to yourself');

    const isRequestPending = await this.ds
      .createQueryBuilder(FriendRequest, 'fr')
      .where(
        '((fr.requester_id = :requesterId AND fr.receiver_id = :receiverId)' +
          ' OR ' +
          '(fr.requester_id = :receiverId AND fr.receiver_id = :requesterId))' +
          ' AND ' +
          'fr.status = :status',
        { requesterId, receiverId, status: 'pending' }
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

  async acceptFriendRequest(userId: number, requestId: number): Promise<void> {
    await this.ds.transaction(async (em) => {
      const friendRequest = await this.ds
        .createQueryBuilder()
        .update(FriendRequest)
        .set({ status: 'accepted' as const })
        .where('id = :requestId AND receiver_id = :userId AND status = :status', {
          requestId,
          userId,
          status: 'pending',
        })
        .returning(['requesterId', 'receiverId'])
        .execute();

      const row = friendRequest.raw[0];

      if (!row) throw HttpError.Conflict('Friend request does not exist or is not pending');

      await this.ds
        .createQueryBuilder()
        .insert()
        .into(Friendship)
        .values([
          { userId: row.requester_id, friendId: row.receiver_id },
          { userId: row.receiver_id, friendId: row.requester_id },
        ])
        .orIgnore()
        .execute();
    });
  }

  async rejectFriendRequest(userId: number, requestId: number): Promise<void> {
    const pendingRequest = await this.ds
      .createQueryBuilder(FriendRequest, 'fr')
      .where('id = :requestId AND receiver_id = :userId  AND status = :status', {
        requestId,
        userId,
        status: 'pending',
      })
      .getOne();

    if (!pendingRequest)
      throw HttpError.Conflict('Friend request does not exist or is not pending');

    pendingRequest.status = 'rejected' as const;
    await friendsRequestRepository.save(pendingRequest);
  }

  async cancelFriendRequest(userId: number, requestId: number): Promise<void> {
    const pendingRequest = await this.ds
      .createQueryBuilder(FriendRequest, 'fr')
      .where('id = :requestId AND requester_id = :userId  AND status = :status', {
        requestId,
        userId,
        status: 'pending',
      })
      .getOne();

    if (!pendingRequest)
      throw HttpError.Conflict('Friend request does not exist or is not pending');

    pendingRequest.status = 'cancelled' as const;
    await friendsRequestRepository.save(pendingRequest);
  }

  async getIncomingFriendRequests(userId: number): Promise<UserListItemDTO[]> {
    const incomingFriendRequest = await friendsRequestRepository.find({
      where: {
        receiverId: userId,
        status: 'pending',
      },
      select: ['requesterId'],
    });

    const outgoingFriendRequestIds = incomingFriendRequest.map((r) => r.requesterId);
    if (outgoingFriendRequestIds.length === 0) return [];

    return await usersService.getUsers(userId, '', 1, outgoingFriendRequestIds);
  }

  async getOutcomingFriendRequests(userId: number) {
    const outgoingFriendRequest = await friendsRequestRepository.find({
      where: {
        requesterId: userId,
        status: 'pending',
      },
      select: ['receiverId'],
    });

    const outgoingFriendRequestIds = outgoingFriendRequest.map((r) => r.receiverId);
    if (outgoingFriendRequest.length === 0) return [];

    return await usersService.getUsers(userId, '', 1, outgoingFriendRequestIds);
  }
}

export const friendRequestsService = new FriendRequestService(AppDataSource);
