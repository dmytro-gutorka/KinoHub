import { Request, Response } from 'express';
import { usersStatsService } from '../services/userStats.service.js';

export async function getUserStats(req: Request, res: Response) {
  const userId: number | undefined = req.user?.id;

  const data = await Promise.all([
    usersStatsService.getUserMediaStats(userId),
    usersStatsService.getTopRatedMedia(userId, 'tv'),
    usersStatsService.getTopRatedMedia(userId, 'movie'),
  ]);

  res.status(200).json({
    userStats: data[0],
    topRatedTv: data[1],
    topRatedMovie: data[2],
  });
}
