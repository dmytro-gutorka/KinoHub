import { Request, Response } from 'express';
import { MediaEpisode } from '../entity/MediaEpisode.js';
import { episodesServices } from '../services/episodes.services.js';

export async function getEpisodes(
  req: Request<{ season: number; mediaId: number }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const season: number = Number(req.params.season);
  const userId: number | undefined = req.user?.id;

  const episodes: MediaEpisode[] = await episodesServices.read(mediaId, userId, season);

  res.status(200).json(episodes);
}

export async function createEpisodes(
  req: Request<any, any, any, { season: number; episodesNumber: number }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const season: number = Number(req.params.season);
  const userId: number | undefined = req.user?.id;
  const episodesNumber: number = Number(req.query.episodesNumber);

  const episodes: MediaEpisode[] = await episodesServices.create(
    mediaId,
    userId,
    season,
    episodesNumber
  );

  res.status(201).json(episodes);
}

export async function updateEpisodes(
  req: Request<{ season: number; mediaId: number; episode: number }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const season: number = Number(req.params.season);
  const episode: number = Number(req.params.episode);
  const userId: number | undefined = req.user?.id;
  const action = req.body;

  await episodesServices.update(mediaId, season, userId, episode, action);

  res.status(200).json({ message: 'Episode is updated' });
}
