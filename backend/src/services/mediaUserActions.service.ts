import { MediaType, UserAction } from '../types/types.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { HttpError } from '../errors/HttpError.js';
import { IsNull, Not } from 'typeorm';
import { actionsRepository, mediaRepository } from '../config/repositories.js';
import { activityLogService } from './activityLog.service.js';

export class MediaUserActionsService {
  async getUserMediaAction(
    userId: number,
    mediaId: number,
    mediaType: MediaType
  ): Promise<UserAction> {
    const userAction: UserAction | null = await actionsRepository.findOneBy({
      userId,
      mediaId,
      mediaType,
    });

    if (!userAction) throw HttpError.NotFound('Media action is not found');

    return userAction;
  }

  async createUserMediaAction(
    userId: number,
    mediaId: number,
    mediaType: MediaType
  ): Promise<UserAction> {
    const mediaInfo: MediaInfo | null = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (!mediaInfo)
      throw HttpError.NotFound(
        'Media info not found. Please create media info instance, before creating user action'
      );

    const isUserActionExist: boolean = await actionsRepository.existsBy({
      mediaId,
      userId,
      mediaType,
      mediaInfoId: mediaInfo.id,
    });

    if (isUserActionExist) throw HttpError.Conflict('Media action already exists');

    const mediaUserAction: MediaUserAction = actionsRepository.create({
      mediaId,
      userId,
      mediaType,
      mediaInfoId: mediaInfo.id,
    });

    await actionsRepository.save(mediaUserAction);
    return mediaUserAction;
  }

  async updateUserMediaAction(
    userId: number,
    mediaId: number,
    mediaType: MediaType,
    action: Partial<UserAction>
  ): Promise<UserAction | null> {
    const mediaUserAction: MediaUserAction | null = await actionsRepository.findOneBy({
      mediaId,
      userId,
      mediaType,
    });

    if (!mediaUserAction) throw HttpError.Conflict('Media action does not exist');

    await activityLogService.toggleActivityLog(
      action,
      userId,
      mediaId,
      mediaType,
      mediaUserAction.mediaInfoId
    );

    await actionsRepository.update({ mediaId, userId, mediaType }, action);
    return await actionsRepository.findOneBy({ mediaId, userId, mediaType });
  }

  async getMovieBoardItems(userId: number): Promise<Array<MediaUserAction>> {
    const userActions: Array<MediaUserAction> | null = await actionsRepository.find({
      where: { userId, watchStatus: Not(IsNull()) },
      select: ['watchStatus', 'mediaId'],
    });

    if (!userActions) throw HttpError.NotFound('Media action is not found');

    return userActions;
  }
}

export const mediaUserActionService = new MediaUserActionsService();
