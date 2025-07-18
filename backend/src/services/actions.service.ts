import { UserAction } from '../types/types.js';
import { actionsRepository } from '../repositories/actions.repository.js';
import { HttpError } from '../errors/HttpError.js';

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

  async create(userId: number | undefined, mediaId: number): Promise<UserAction> {
    const isUserActionExists: boolean = await actionsRepository.existsBy({ mediaId, userId });

    if (isUserActionExists) throw HttpError.Conflict('User action already exists');

    return actionsRepository.create({ mediaId, userId });
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
