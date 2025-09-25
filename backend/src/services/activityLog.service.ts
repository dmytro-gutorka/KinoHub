import { FormatedActivityKeys, FORMATTED_ACTIVITY_TYPE } from '../utils/constants/SHARED.js';
import { ActivityType, MediaType } from '../types/types.js';
import { activityLogRepository } from '../config/repositories.js';
import { HttpError } from '../errors/HttpError.js';

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
