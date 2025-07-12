import { mediaUserActionsRepository } from '../../repositories/mediaUserActionsRepository.js';

export class MediaUserActionsService {
  async create(mediaId: number, userId: number) {
    const userActionsExists = await mediaUserActionsRepository.existsBy({ mediaId, userId });

    if (!userActionsExists) {
      const userActionsEntity = mediaUserActionsRepository.create({ mediaId, userId });
      await mediaUserActionsRepository.save(userActionsEntity);
    }
  }

  async update(mediaId: number) {}
}
