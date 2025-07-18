import { Request, Response } from 'express';
import { MediaType } from '../types/types.js';
import { mediaService } from '../services/media.service.js';
import { MediaInfo } from '../entity/MediaInfo.js';

export async function readMedia(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);

  const media: MediaInfo = await mediaService.read(mediaId);

  res.status(200).json(media);
}

export async function createMedia(
  req: Request<any, any, any, { mediaType: MediaType }>,
  res: Response
) {
  const mediaId: number = Number(req.params.mediaId);
  const mediaType: MediaType = req.query.mediaType;

  const media = await mediaService.create(mediaId, mediaType);

  res.status(200).json(media);
}

export async function updateMedia(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);

  const media = await mediaService.update(mediaId);

  res.status(200).json(media);
}
