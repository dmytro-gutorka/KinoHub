import { Request, Response } from 'express';
import { episodesServices } from '../services/episodes.services.js';
import { Episode } from '../entity/Episode.js';

export async function getEpisodeList(
  req: Request<{ season: number; tvShowId: number }>,
  res: Response
): Promise<void> {
  const tvShowId: number = Number(req.params.tvShowId);
  const season: number = Number(req.params.season);
  const userId: number | undefined = req.user?.id;

  const episodes: Episode[] = await episodesServices.getListBy(tvShowId, userId, season);

  res.status(200).json(episodes);
}

export async function createEpisodeList(
  req: Request<any, any, any, { season: number; episodes_number: number }>,
  res: Response
): Promise<void> {
  const tvShowId: number = Number(req.params.tvShowId);
  const season: number = Number(req.params.season);
  const userId: number | undefined = req.user?.id;
  const episodesNumber: number = Number(req.query.episodes_number);

  const episodes: Episode[] = await episodesServices.createList(
    tvShowId,
    userId,
    season,
    episodesNumber
  );

  res.status(201).json(episodes);
}

export async function createEpisode(
  req: Request<any, any, any, { season: number; episodes_number: number }>,
  res: Response
): Promise<void> {
  const tvShowId: number = Number(req.params.tvShowId);
  const season: number = Number(req.params.season);
  const userId: number | undefined = req.user?.id;
  const { episode, action } = req.body;

  const result: Episode = await episodesServices.createOne(
    tvShowId,
    userId,
    season,
    episode,
    action
  );

  res.status(201).json(result);
}

export async function updateEpisode(
  req: Request<{ tvShowId: number; season: number; episode: number }>,
  res: Response
): Promise<void> {
  const tvShowId: number = Number(req.params.tvShowId);
  const season: number = Number(req.params.season);
  const episode: number = Number(req.params.episode);
  const userId: number | undefined = req.user?.id;
  const { action } = req.body;
  
  await episodesServices.update(tvShowId, season, userId, episode, action);

  res.status(200).json({ message: 'Episode is updated' });
}
