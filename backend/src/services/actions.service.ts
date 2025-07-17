import { UserAction } from '../types/types.js';
import { actionsRepository } from '../repositories/actions.repository.js';
import { HttpError } from '../errors/HttpError.js';

export class MediaUserActionsService {
  async read(userId: number, mediaId: number): Promise<UserAction> {
    let userActions: UserAction | null = await actionsRepository.findOneBy({ userId, mediaId });

    if (userActions) return userActions;

    return {
      isLiked: false,
      isWatched: false,
      rating: null,
      watchStatus: null,
    };
  }

  async create(userId: number, mediaId: number, action: Partial<UserAction>) {
    const userActionsExists = await actionsRepository.existsBy({ mediaId, userId });

    if (userActionsExists) throw HttpError.Conflict('User actions already exists');

    const userActionsEntity = actionsRepository.create({ ...action, mediaId, userId });
    await actionsRepository.save(userActionsEntity);
  }

  async update(userId: number, mediaId: number, action: Partial<UserAction>) {
    await actionsRepository.update({ mediaId, userId }, { ...action });
  }
}

export const mediaUserActionsService = new MediaUserActionsService();
