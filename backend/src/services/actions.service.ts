import { MediaType, UserAction } from '../types/types.js';
import { actionsRepository } from '../repositories/actions.repository.js';
import { HttpError } from '../errors/HttpError.js';
import { mediaRepository } from '../repositories/media.repository.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';

export class MediaUserActionsService {
  async read(userId: number | undefined, mediaId: number): Promise<UserAction> {
    const defaultUserAction: UserAction = {
      isLiked: false,
      isWatched: false,
      rating: null,
      watchStatus: null,
    };

    const userAction: UserAction | null = await actionsRepository.findOneBy({ userId, mediaId });

    return !userAction ? defaultUserAction : userAction;
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

    const isUserActionExists: boolean = await actionsRepository.existsBy({
      mediaId,
      userId,
      mediaInfoId: mediaInfo.id,
    });

    if (isUserActionExists) throw HttpError.Conflict('User action already exists');

    const mediaUserAction: MediaUserAction = actionsRepository.create({
      mediaId,
      userId,
      mediaInfoId: mediaInfo.id,
    });
    await actionsRepository.save(mediaUserAction);

    return mediaUserAction;
  }

  async update(
    userId: number | undefined,
    mediaId: number,
    action: UserAction
  ): Promise<UserAction | null> {
    const isUserActionExists: boolean = await actionsRepository.existsBy({ mediaId, userId });

    if (!isUserActionExists) throw HttpError.Conflict('User action does not exist');

    await actionsRepository.update({ mediaId, userId }, action);

    return await actionsRepository.findOneBy({ mediaId, userId });
  }
}

export const mediaUserActionsService = new MediaUserActionsService();
