import { MediaType, UserAction } from '../types/types.js';
import { actionsRepository } from '../repositories/actions.repository.js';
import { mediaRepository } from '../repositories/media.repository.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { HttpError } from '../errors/HttpError.js';

export class MediaUserActionsService {
  async getOneBy(
    userId: number | undefined,
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

  async getListBy(userId: number | undefined): Promise<Array<UserAction>> {
    const userActions: Array<UserAction> | null = await actionsRepository.findBy({
      userId,
    });

    if (!userActions) throw HttpError.NotFound('Media action is not found');

    return userActions;
  }

  async create(
    userId: number | undefined,
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

  async update(
    userId: number | undefined,
    mediaId: number,
    mediaType: MediaType,
    action: Partial<UserAction>
  ): Promise<UserAction | null> {
    const isUserActionExist: boolean = await actionsRepository.existsBy({
      mediaId,
      userId,
      mediaType,
    });

    if (!isUserActionExist) throw HttpError.Conflict('Media action does not exist');

    await actionsRepository.update({ mediaId, userId, mediaType }, action);

    return await actionsRepository.findOneBy({ mediaId, userId, mediaType });
  }
}

export const mediaUserActionsService = new MediaUserActionsService();
