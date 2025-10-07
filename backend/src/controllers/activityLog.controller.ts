import { Request, Response } from 'express';
import { activityLogService } from '../services/activity-log.service.js';
import { ActivityLog } from '../entity/ActivityLog.js';

export async function getActivityLog(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const page: number = Number(req.query.page) || 1;

  const activityLogList: ActivityLog[] =
    (await activityLogService.getActivityLogList(userId, page)) ?? [];

  res.status(200).json(activityLogList);
}

export async function getWeeklyActivitySession(req: Request, res: Response) {
  const userId: number = req.user?.id!;

  const weeklyActivitySession = activityLogService.getWeeklyActivitySession(
    userId,
    'Europe/Kyiv',
    'movie'
  );

  const weeklyPeekHours = activityLogService.getWeeklyPeakWatchHours(
    userId,
    'Europe/Kyiv',
    'movie'
  );

  const weeklyPeekDay = activityLogService.getWeeklyPeakWatchedDay(userId, 'Europe/Kyiv', 'movie');
  const avgWatchTimePer = activityLogService.getAvgWatchTimePer(userId, 'Europe/Kyiv', 'movie');

  const response = await Promise.all([
    weeklyActivitySession,
    weeklyPeekHours,
    weeklyPeekDay,
    avgWatchTimePer,
  ]);

  res.status(200).json({
    weeklyActivitySession: response[0],
    weeklyPeekHours: response[1],
    weeklyPeekDay: response[2],
    avgWatchTimePer: response[3],
  });
}
