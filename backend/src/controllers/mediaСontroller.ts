import { Request, Response } from 'express';
import { mediaUserActionsRepository } from '../repositories/mediaUserActionsRepository.js';
import { mediaServices } from '../services/media/index.js';
import { Error } from 'sequelize';

export async function cacheMedia(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = 1;
  const mediaType = 'tv';

  try {
    await mediaServices.info.create(mediaId, mediaType);
    await mediaServices.actions.create(mediaId, userId);

    const mediaData = await mediaUserActionsRepository.find({
      where: { mediaId, userId },
      relations: ['mediaInfo'],
    });

    res.status(200).json({ data: mediaData });
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
  }
}
