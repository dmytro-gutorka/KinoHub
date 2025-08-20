import { Request, Response } from 'express';
import { usersStatsService } from '../services/userStats.service.js';

export async function getUserStats(req: Request, res: Response) {
  const userId: number | undefined = req.user?.id;

  const data = await Promise.all([
    usersStatsService.getUserMediaAggregatedStats(userId),
    usersStatsService.getTopRatedMedia(userId, 'tv'),
    usersStatsService.getTopRatedMedia(userId, 'movie'),
    usersStatsService.getFavoriteGenres(userId),
  ]);

  res.status(200).json({
    userMediaAggregatedStats: data[0],
    topRatedTv: data[1],
    topRatedMovie: data[2],
    favoriteGenres: data[3],
  });
}
