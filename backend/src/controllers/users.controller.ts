import { Request, Response } from 'express';
import { SettledUserMediaStats } from '../types/types.js';
import { usersStatsService } from '../services/userStats.service.js';

export async function getUserStats(req: Request, res: Response) {
  const userId: number | undefined = req.user?.id;

  const userMediaStats: SettledUserMediaStats = await Promise.allSettled([
    usersStatsService.getUserMediaAggregatedStats(userId),
    usersStatsService.getTopRatedMedia(userId, 'tv'),
    usersStatsService.getTopRatedMedia(userId, 'movie'),
    usersStatsService.getFavoriteGenres(userId),
    usersStatsService.getTvShowInProgress(userId),
  ])
  const [aggregatedStats, topTv, topMovie, favoriteGenres, tvShowInProgress] = userMediaStats;

  res.status(200).json({
    userMediaAggregatedStats: aggregatedStats.status === 'fulfilled' ? aggregatedStats.value : null,
    topRatedTv: topTv.status === 'fulfilled' ? topTv.value : [],
    topRatedMovie: topMovie.status === 'fulfilled' ? topMovie.value : [],
    favoriteGenres: favoriteGenres.status === 'fulfilled' ? favoriteGenres.value : [],
    tvShowInProgress: tvShowInProgress.status === 'fulfilled' ? tvShowInProgress.value : [],
  });
}
