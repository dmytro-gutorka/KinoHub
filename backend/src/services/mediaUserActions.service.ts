import { mediaUserActionsRepository } from '../repositories/mediaUserActionsRepository.js';

export async function createMediaUserActions(mediaId: number, userId: number) {
  const userActionsExists = await mediaUserActionsRepository.existsBy({ mediaId, userId });

  if (!userActionsExists) {
    const userActionsEntity = mediaUserActionsRepository.create({ mediaId, userId });
    await mediaUserActionsRepository.save(userActionsEntity);
  }
}
