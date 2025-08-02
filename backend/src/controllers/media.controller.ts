import { Request, Response } from 'express';
import { MediaType } from '../types/types.js';
import { mediaService } from '../services/media.service.js';
import { MediaInfo } from '../entity/MediaInfo.js';

export async function getMedia(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const mediaType: MediaType = req.query.media_type;

  const media: MediaInfo = await mediaService.getOneBy(mediaId, mediaType);

  res.status(200).json(media);
}

export async function createMedia(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const mediaType: MediaType = req.query.media_type;

  const media: MediaInfo = await mediaService.create(mediaId, mediaType);

  res.status(201).json(media);
}

export async function updateMedia(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const mediaType: MediaType = req.query.media_type;

  const media: MediaInfo = await mediaService.update(mediaId, mediaType);

  res.status(200).json(media);
}
