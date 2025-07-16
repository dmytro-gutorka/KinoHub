import { actionsRepository } from '../repositories/actions.repository.js';

export class MediaUserActionsService {
  async create(mediaId: number, userId: number) {
    const userActionsExists = await actionsRepository.existsBy({ mediaId, userId });

    if (!userActionsExists) {
      const userActionsEntity = actionsRepository.create({ mediaId, userId });
      await actionsRepository.save(userActionsEntity);
    }
  }

  async update(mediaId: number, userId: number, action: object) {
    await actionsRepository.update({ mediaId, userId }, { ...action });
  }
}
