import { Request, Response } from 'express';
import { usersStatsService } from '../services/userStats.service.js';
import { UserMediaStats } from '../types/types.js';

export async function getUserStats(req: Request, res: Response) {
  const userId: number | undefined = req.user?.id;

  const userMediaStats: UserMediaStats = await Promise.all([
    usersStatsService.getUserMediaAggregatedStats(userId),
    usersStatsService.getTopRatedMedia(userId, 'tv'),
    usersStatsService.getTopRatedMedia(userId, 'movie'),
    usersStatsService.getFavoriteGenres(userId),
    usersStatsService.getTvShowInProgress(userId),
  ]);

  res.status(200).json({
    userMediaAggregatedStats: userMediaStats[0],
    topRatedTv: userMediaStats[1],
    topRatedMovie: userMediaStats[2],
    favoriteGenres: userMediaStats[3],
    tvShowInProgress: userMediaStats[4],
  });
}
