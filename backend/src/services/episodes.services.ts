import { episodesRepository } from '../repositories/episodes.repository.js';
import { Episode } from '../entity/Episode.js';
import { HttpError } from '../errors/HttpError.js';
import { Action } from '../types/types.js';

export class EpisodesServices {
  async getListBy(
    tvShowId: number,
    userId: number | undefined,
    season: number
  ): Promise<Episode[]> {
    const episodes: Episode[] = await Episode.findBy({ tvShowId, season, userId });

    if (episodes.length === 0) throw HttpError.NotFound('Episodes not found');

    return episodes;
  }

  async createList(
    tvShowId: number,
    userId: number | undefined,
    season: number,
    episodesNumber: number
  ): Promise<Episode[]> {
    const episodeList: Episode[] = await Episode.findBy({
      tvShowId,
      userId,
      season,
    });

    if (episodeList.length > 0) throw HttpError.Conflict('Episodes already exists');

    const episodes: Episode[] = new Array(episodesNumber).fill(1).map(
      (_, i): Episode =>
        episodesRepository.create({
          tvShowId,
          userId,
          season,
          episode: i + 1,
          isWatched: false,
        })
    );

    await episodesRepository.save(episodes);
    return episodes;
  }

  async createOne(
    tvShowId: number,
    userId: number | undefined,
    season: number,
    episode: number,
    action: Action
  ): Promise<Episode> {
    const result: Episode = episodesRepository.create({
      userId,
      season,
      episode,
      tvShowId,
      [action.type]: action.payload,
    });

    await episodesRepository.save(result);
    return result;
  }

  async update(
    tvShowId: number,
    season: number,
    userId: number | undefined,
    episode: number,
    action: Action
  ): Promise<void> {
    const episodeEntity: Episode | null = await episodesRepository.findOneBy({
      tvShowId,
      season,
      episode,
      userId,
    });

    if (!episodeEntity) throw HttpError.Conflict('Episode does not exist');

    await episodesRepository.update(
      {
        tvShowId,
        season,
        episode,
        userId,
      },
      { [action.type]: action.payload }
    );
  }
}

export const episodesServices = new EpisodesServices();
