import { Request, Response } from 'express';
import { DateRangePresets, DateRange, SettledUserMediaStats, MediaType } from '../types/types.js';
import { usersStatsService } from '../services/user-stat.service.js';
import { userProfileService } from '../services/user-profile.js';
import rangePreset from '../utils/helpers/rangePreset.js';

export async function getUserStats(
  req: Request<any, any, any, { tz: string; datePreset: DateRangePresets; mediaType: MediaType }>,
  res: Response
) {
  const userId: number = req.user?.id!;
  const tz: string = req.query.tz ?? 'UTC';
  const datePreset: DateRangePresets = req.query.datePreset ?? 'all';
  const mediaType: MediaType = req.query.mediaType ?? 'movie';

  const dateRange: DateRange = rangePreset(datePreset, tz) ?? {};

  const userMediaStats: SettledUserMediaStats = await Promise.allSettled([
    usersStatsService.getUserMediaAggregatedStats(userId, mediaType, dateRange),
    usersStatsService.getTopRatedMedia(userId, mediaType, dateRange),
    usersStatsService.getTopRatedMedia(userId, mediaType, dateRange),
    usersStatsService.getFavoriteGenres(userId, mediaType, dateRange),
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
