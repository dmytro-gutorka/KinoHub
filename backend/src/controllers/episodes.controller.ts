import { Request, Response } from 'express';
import { MediaEpisode } from '../entity/MediaEpisode.js';
import { episodesServices } from '../services/episodes.services.js';

export async function getEpisodes(req: Request, res: Response): Promise<void> {}

export async function createEpisodes(
  req: Request<any, any, any, { season: number; episodesNumber: number }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const season: number = Number(req.query.season);
  const episodesNumber: number = Number(req.query.episodesNumber);

  const episodes: MediaEpisode[] = await episodesServices.create(
    mediaId,
    userId,
    season,
    episodesNumber
  );

  res.status(201).json(episodes);
}

export async function updateEpisodes(req: Request, res: Response): Promise<void> {}
