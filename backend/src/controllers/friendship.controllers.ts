import { Request, Response } from 'express';
import { friendshipService } from '../services/friendship.service.js';

export async function getFriends(
  req: Request<any, any, any, { search: string; page: number }>,
  res: Response
) {
  const userId: number = req.user?.id!;
  const search: string = req.query.search || '';
  const page: number = req.query.page || 1;

  const friends = await friendshipService.getFriends(userId, search, page);

  res.status(200).json(friends);
}

export async function getMutualFriends(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const friendId: number = Number(req.params.id);

  const mutualFriends = await friendshipService.getMutualFriends(userId, friendId);

  res.status(200).json(mutualFriends);
}

export async function deleteFriend(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const friendId: number = Number(req.params.id);

  await friendshipService.deleteFriend(userId, friendId);

  res.status(200).json({ message: 'Friend deleted' });
}
