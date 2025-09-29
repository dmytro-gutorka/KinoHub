import {
  FormatedActivityKeys,
  FORMATTED_ACTIVITY_TYPE,
  PAGINATION_LIMITS,
} from '../utils/constants/SHARED.js';
import { ActivityType, MediaType } from '../types/types.js';
import { activityLogRepository } from '../config/repositories.js';
import { HttpError } from '../errors/HttpError.js';
import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { ActivityLog } from '../entity/ActivityLog.js';
import { MediaInfo } from '../entity/MediaInfo.js';

interface ActivityLogArgs {
  userId: number;
  mediaId: number;
  mediaType: MediaType;
  mediaInfoId: number;
  activityType: ActivityType;
  valueNumeric?: number | null;
  commentId?: number | null;
}

class ActivityLogService {
  constructor(private readonly dt: DataSource = AppDataSource) {}

  async getWeeklyActivitySession(userId: number, tz: string, mediaType: MediaType) {
    return this.dt
      .createQueryBuilder()
      .select([
        'EXTRACT(ISODOW FROM (start_time_utc AT TIME ZONE :tz))::int AS "dowISO"',
        'COUNT(*)::int as "moviesWatched"',
      ])
      .from('(SELECT * FROM public.weekly_sessions(:userId, :tz, :mediaType))', 'w')
      .groupBy('"dowISO"')
      .setParameters({ userId, tz, mediaType })
      .getRawMany();
  }

  async getWeeklyPeakWatchHours(userId: number, tz: string, mediaType: MediaType) {
    return this.dt
      .createQueryBuilder()
      .select([
        'EXTRACT(HOUR FROM (start_time_utc AT TIME ZONE :tz))::int AS "peekHour"',
        'COUNT(*)::int as "moviesWatched"',
      ])
      .from('(SELECT * FROM public.weekly_sessions(:userId, :tz, :mediaType))', 'w')
      .groupBy('"peekHour"')
      .take(3)
      .setParameters({ userId, tz, mediaType })
      .getRawMany();
  }

  async getWeeklyPeakWatchedDay(userId: number, tz: string, mediaType: MediaType) {
    return this.dt
      .createQueryBuilder()
      .select([
        'EXTRACT(ISODOW FROM (start_time_utc AT TIME ZONE :tz))::int AS "dowISO"',
        'COUNT(*)::int as "moviesWatched"',
      ])
      .from('(SELECT * FROM public.weekly_sessions(:userId, :tz, :mediaType))', 'w')
      .groupBy('"dowISO"')
      .orderBy('"dowISO"', 'DESC')
      .take(1)
      .setParameters({ userId, tz, mediaType })
      .getRawMany();
  }

  async getAvgWatchTimePer(userId: number, tz: string, mediaType: MediaType) {
    return this.dt
      .createQueryBuilder()
      .select(`(SUM(runtime) / ${7})::int`, 'avgWatchTime')
      .from('(SELECT * FROM public.weekly_sessions(:userId, :tz, :mediaType))', 'w')
      .setParameters({ userId, tz, mediaType })
      .getRawMany();
  }

  async getActivityLogList(userId: number, page: number) {
    return this.dt
      .getRepository(ActivityLog)
      .createQueryBuilder('a')
      .innerJoin(MediaInfo, 'mi', 'mi.id = a.mediaInfoId')
      .select([
        'a.id as id',
        'a.updatedAt as "updatedAt"',
        'a.activityType as "activityType"',
        'mi.title as "title"',
        'mi.posterPath as "posterPath"',
      ])
      .where('a.userId = :userId', { userId })
      .orderBy('a.updatedAt', 'DESC')
      .take(PAGINATION_LIMITS.ACTIVITY_LOG)
      .skip(PAGINATION_LIMITS.ACTIVITY_LOG * (page - 1))
      .getRawMany();
  }

  async toggleActivityLog(
    action: object,
    userId: number,
    mediaId: number,
    mediaType: MediaType,
    mediaInfoId: number,
    commentId: number | null = null
  ) {
    const [actionType, actionValue] = this.getValidActionEntry(action);

    if (!Object.keys(FORMATTED_ACTIVITY_TYPE).includes(actionType)) return;

    const activityType: ActivityType = FORMATTED_ACTIVITY_TYPE[actionType];
    const valueNumeric = typeof actionValue === 'number' ? actionValue : null;
    const isActionPositive = !!actionValue;

    const args: ActivityLogArgs = {
      userId,
      mediaId,
      mediaType,
      mediaInfoId,
      activityType,
      valueNumeric,
      commentId,
    };

    if (!isActionPositive) await this.removeActivityLog(userId, mediaId, mediaType, activityType);

    if (isActionPositive)
      switch (activityType) {
        case 'rate':
          await this.createRateLog(args);
          break;
        default:
          await this.createLog(args);
          break;
      }
  }

  async createRateLog(args: ActivityLogArgs) {
    const rateLog = await activityLogRepository.findOneBy({
      userId: args.userId,
      mediaId: args.mediaId,
      mediaType: args.mediaType,
      activityType: 'rate',
    });

    if (rateLog) {
      await activityLogRepository.update(
        {
          userId: args.userId,
          mediaId: args.mediaId,
          mediaType: args.mediaType,
          activityType: 'rate',
        },
        { valueNumeric: args.valueNumeric }
      );
    }

    if (!rateLog) {
      await activityLogRepository.save(args);
    }
  }

  async createLog(args: ActivityLogArgs) {
    const commentLog = activityLogRepository.create({ ...args });
    await activityLogRepository.save(commentLog);
  }

  async removeActivityLog(
    userId: number,
    mediaId: number,
    mediaType: MediaType,
    activityType: ActivityType
  ) {
    const activityLog = await activityLogRepository.findOneBy({
      userId,
      mediaId,
      mediaType,
      activityType,
    });

    if (!activityLog) throw HttpError.NotFound('Activity log not found');

    await activityLog.remove();
  }

  getValidActionEntry(action: object): [FormatedActivityKeys, unknown] {
    const actionEntry = Object.entries(action);

    if (actionEntry.length !== 1) throw HttpError.BadRequest('Invalid action type');

    return actionEntry[0] as [FormatedActivityKeys, unknown];
  }
}

export const activityLogService = new ActivityLogService();
