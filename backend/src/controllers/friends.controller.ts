import { Request, Response } from 'express';
import { friendsService } from '../services/friends.service.js';

export async function getFriends(req: Request, res: Response) {}

export async function deleteFriend(req: Request, res: Response) {}

export async function createFriendRequest(req: Request, res: Response) {
  const requesterId: number = req.user?.id!;
  const receiverId: number = req.body.friendId;

  await friendsService.createFriendRequest(requesterId, receiverId);

  res.status(201).json({ message: 'Friend request has been sent' });
}

export async function acceptFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const requestId: number = Number(req.params?.requestId);

  await friendsService.acceptFriendRequest(userId, requestId);

  res.status(200).json({ message: `Friendship has been established` });
}

export async function rejectFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const requestId: number = Number(req.params?.requestId);

  await friendsService.rejectFriendRequest(userId, requestId);

  res.status(201).json({ message: `Friendship has been rejected` });
}

export async function cancelFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const requestId: number = Number(req.params?.requestId);

  await friendsService.cancelFriendRequest(userId, requestId);

  res.status(201).json({ message: `Friendship has been cancelled` });

}
