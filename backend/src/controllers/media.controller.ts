import { Request, Response } from 'express';
import { mediaUserActionsRepository } from '../repositories/mediaUserActionsRepository.js';
import { createMediaUserActions } from '../services/mediaUserActions.service.js';
import { createMediaInfo } from '../services/mediaInfo.service.js';

export async function cacheMedia(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = 1;

  try {
    await createMediaInfo(mediaId);
    await createMediaUserActions(mediaId, userId);

    const mediaData = await mediaUserActionsRepository.find({
      where: { mediaId, userId },
      relations: ['mediaInfo'],
    });

    res.status(200).json({ data: mediaData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
