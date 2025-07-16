import { Request, Response } from 'express';
import { MediaType } from '../types.js';
import { mediaUserActionsRepository } from '../repositories/mediaUserActionsRepository.js';
import { mediaServices } from '../services/media/index.js';

export async function cacheMedia(
  req: Request<any, any, any, { mediaType: MediaType }>,
  res: Response
) {
  const mediaId = Number(req.params.mediaId);
  const userId = Number(req.user?.id);
  const mediaType = req.query.mediaType;

  await mediaServices.info.create(mediaId, mediaType);
  await mediaServices.actions.create(mediaId, userId);

  const mediaData = await mediaUserActionsRepository.findOne({
    where: { mediaId, userId },
    relations: ['mediaInfo'],
  });

  res.status(200).json({ data: mediaData });
}
