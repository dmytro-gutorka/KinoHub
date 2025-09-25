import { Request, Response } from 'express';
import { activityLogService } from '../services/activityLog.service.js';
import { ActivityLog } from '../entity/ActivityLog.js';

export default async function getActivityLog(req: Request, res: Response) {
  const userId: number = req.user?.id!;
  const page: number = Number(req.query.page) || 1;

  const activityLogList: ActivityLog[] =
    (await activityLogService.getActivityLogList(userId, page)) ?? [];

  console.log(activityLogList);

  res.status(200).json(activityLogList);
}
