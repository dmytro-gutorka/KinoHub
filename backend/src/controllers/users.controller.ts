import { Request, Response } from 'express';
import { usersStatsService } from '../services/userStats.service.js';

export async function getUserStats(req: Request, res: Response) {
  const userId: number | undefined = req.user?.id;

  const userStats = await usersStatsService.getCard(userId);

  res.status(200).json(userStats);
}
