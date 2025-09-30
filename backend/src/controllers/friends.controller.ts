import { Request, Response } from 'express';
import { friendsService } from '../services/friends.service.js';

export async function getFriends(req: Request, res: Response) {}

export async function deleteFriend(req: Request, res: Response) {}

export async function createFriendRequest(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const friendId: number = req.body.friendId;

  await friendsService.createFriendRequest(userId, friendId);

  res.status(201).json({ message: 'Friend request has been sent' });
}
