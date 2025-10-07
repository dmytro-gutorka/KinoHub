import { Request, Response } from 'express';
import { friendshipService } from '../services/friendship.service.js';

export async function getFriends(req: Request, res: Response) {
  const userId: number = req.user?.id!;

  const friends = await friendshipService.getFriends(userId)

  res.status(200).json(friends);
}

export async function deleteFriend(req: Request, res: Response) {}