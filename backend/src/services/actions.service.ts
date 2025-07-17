import { UserAction } from '../types/types.js';
import { actionsRepository } from '../repositories/actions.repository.js';

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

  async getOrCreate(userId: number | undefined, mediaId: number): Promise<UserAction | number> {
    try {
      const isUserActionExists: UserAction | null = await actionsRepository.findOneBy({
        mediaId,
        userId,
      });

      if (isUserActionExists) return isUserActionExists;

      const userAction: UserAction = actionsRepository.create({ mediaId, userId });
      await actionsRepository.save(userAction);

      return userAction;
    } catch (error) {
      console.error(error);
      return 1;
    }
  }

  async update(
    userId: number | undefined,
    mediaId: number,
    action: UserAction
  ): Promise<UserAction | null> {
    await actionsRepository.update({ mediaId, userId }, action);
    return await actionsRepository.findOneBy({ mediaId, userId });
  }
}

export const mediaUserActionsService = new MediaUserActionsService();
