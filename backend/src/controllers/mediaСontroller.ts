import { Request, Response } from 'express';
import { mediaUserActionsRepository } from '../repositories/mediaUserActionsRepository.js';
import { mediaServices } from '../services/media/index.js';

export async function cacheMedia(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = 1;
  const mediaType = 'tv';

  try {
    await mediaServices.info.create(mediaId, mediaType);
    await mediaServices.actions.create(mediaId, userId);

    const mediaData = { message: 'Media is cached' };

    // const mediaData = await mediaUserActionsRepository.find({
    //   where: { mediaId, userId },
    //   relations: ['mediaInfo'],
    // });

    res.status(200).json({ data: mediaData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
