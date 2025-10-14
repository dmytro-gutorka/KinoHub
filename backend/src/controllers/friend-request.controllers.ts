import { Request, Response } from 'express';
import { friendRequestsService } from '../services/friend-request.service.js';
// eslint-disable-next-line n/no-extraneous-import
import { UserListItemDTO } from '@kinohub/schemas';

type FriendRequestQuery = {
  search: string;
  page: number;
};
type FriendRequest = Request<any, any, any, FriendRequestQuery>;

export async function createFriendRequest(req: Request, res: Response) {
  const requesterId: number = req.user?.id!;
  const receiverId: number = req.body.friendId;

  await friendRequestsService.createFriendRequest(requesterId, receiverId);

  res.status(201).json({ message: 'Friend request has been sent' });
}

export async function acceptFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const requestId: number = Number(req.params?.requestId);

  await friendRequestsService.acceptFriendRequest(userId, requestId);

  res.status(200).json({ message: `Friendship has been established` });
}

export async function rejectFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const requestId: number = Number(req.params?.requestId);

  await friendRequestsService.rejectFriendRequest(userId, requestId);

  res.status(201).json({ message: `Friendship has been rejected` });
}

export async function cancelFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const requestId: number = Number(req.params?.requestId);

  await friendRequestsService.cancelFriendRequest(userId, requestId);

  res.status(201).json({ message: `Friendship has been cancelled` });
}

export async function getIncomingFriendRequests(req: FriendRequest, res: Response) {
  const userId: number = req.user?.id!;
  const search: string = req.query.search || '';
  const page: number = req.query.page || 1;

  const incomingRequests: UserListItemDTO[] = await friendRequestsService.getIncomingFriendRequests(
    userId,
    search,
    page
  );

  res.status(200).json(incomingRequests);
}

export async function getOutcomingFriendRequests(req: FriendRequest, res: Response) {
  const userId: number = req.user?.id!;
  const search: string = req.query.search || '';
  const page: number = req.query.page || 1;

  const upcomingRequests = await friendRequestsService.getOutcomingFriendRequests(
    userId,
    search,
    page
  );

  res.status(200).json(upcomingRequests);
}
