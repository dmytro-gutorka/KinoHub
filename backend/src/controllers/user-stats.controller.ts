import { Request, Response } from 'express';
import { SettledUserMediaStats } from '../types/types.js';
import { usersStatsService } from '../services/user-stats.service.js';
import { userProfileService } from '../services/user-profile.js';

export async function getUserStats(req: Request, res: Response) {
  const userId: number = req.user?.id!;

  const userMediaStats: SettledUserMediaStats = await Promise.allSettled([
    usersStatsService.getUserMediaAggregatedStats(userId),
    usersStatsService.getTopRatedMedia(userId, 'tv'),
    usersStatsService.getTopRatedMedia(userId, 'movie'),
    usersStatsService.getFavoriteGenres(userId),
    usersStatsService.getTvShowInProgress(userId),
  ]);
  const [aggregatedStats, topTv, topMovie, favoriteGenres, tvShowInProgress] = userMediaStats;

  res.status(200).json({
    topRatedTv: topTv.status === 'fulfilled' ? topTv.value : [],
    topRatedMovie: topMovie.status === 'fulfilled' ? topMovie.value : [],
    favoriteGenres: favoriteGenres.status === 'fulfilled' ? favoriteGenres.value : [],
    tvShowInProgress: tvShowInProgress.status === 'fulfilled' ? tvShowInProgress.value : [],
    userMediaAggregatedStats: aggregatedStats.status === 'fulfilled' ? aggregatedStats.value : null,
  });
}

export async function getUserProfile(req: Request, res: Response) {
  const userId: number = req.user?.id!;

  const userProfile = await userProfileService.getUserProfile(userId);

  res.status(200).json(userProfile);
}

export async function updateUserProfile(req: Request, res: Response) {
  const userId: number = req.user?.id!;

  await userProfileService.updateUserProfile(userId, req.body);

  res.status(200).json('Profile updated');
}