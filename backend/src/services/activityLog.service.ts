import { FormatedActivityKeys, FORMATTED_ACTIVITY_TYPE } from '../utils/constants/SHARED.js';
import { ActivityType, MediaType } from '../types/types.js';
import { activityLogRepository } from '../config/repositories.js';
import { HttpError } from '../errors/HttpError.js';

class ActivityLogService {
  async toggleActivityLog(
    action: object,
    userId: number,
    mediaId: number,
    mediaType: MediaType,
    mediaInfoId: number,
    commentId?: number
  ) {
    const [actionType, actionValue] = this.getValidActionEntry(action);
    const activityType: ActivityType = FORMATTED_ACTIVITY_TYPE[actionType];

    if (typeof !!actionValue === 'boolean') {
      if (actionValue) {
        await this.createActivityLog(
          userId,
          mediaId,
          mediaType,
          mediaInfoId,
          activityType,
          actionValue,
          commentId
        );
      } else {
        await this.removeActivityLog(userId, mediaId, mediaType, activityType);
      }
    }
  }

  async createActivityLog(
    userId: number,
    mediaId: number,
    mediaType: MediaType,
    mediaInfoId: number,
    activityType: ActivityType,
    actionValue?: unknown,
    commentId?: number
  ) {
    const valueNumeric = typeof actionValue === 'number' ? actionValue : null;

    await activityLogRepository.upsert(
      {
        userId,
        mediaId,
        mediaType,
        mediaInfoId,
        activityType,
        commentId: commentId ?? null,
        valueNumeric,
      },
      ['userId', 'mediaId', 'mediaType', 'activityType']
    );
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

    const [actionType, actionValue] = actionEntry[0] as [FormatedActivityKeys, unknown];

    if (!Object.keys(FORMATTED_ACTIVITY_TYPE).includes(actionType))
      throw HttpError.BadRequest('Invalid action type');

    return [actionType, actionValue];
  }
}

export const activityLogService = new ActivityLogService();
