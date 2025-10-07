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
  const friendId: number = req.body.friendId;
  const requestId: number = Number(req.params?.requestId);

  await friendsService.acceptFriendRequest(userId, friendId, requestId);

  res.status(200).json({ message: `User id${userId} and id${friendId} are now friends` });
}

export async function rejectFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const friendId: number = req.body.friendId;
  const requestId: number = Number(req.params?.requestId);
}

export async function cancelFriendRequest(req: Request, res: Response) {}
