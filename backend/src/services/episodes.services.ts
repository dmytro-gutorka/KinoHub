import { episodesRepository } from '../repositories/episodes.repository.js';
import { Episode } from '../entity/Episode.js';
import { HttpError } from '../errors/HttpError.js';

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

  async create(
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

  async update(
    tvShowId: number,
    season: number,
    userId: number | undefined,
    episode: number,
    action: object
  ): Promise<void> {
    const isEpisodeExists: Episode | null = await episodesRepository.findOneBy({
      tvShowId,
      season,
      episode,
      userId,
    });

    if (!isEpisodeExists) throw HttpError.Conflict('Episode does not exist');

    await episodesRepository.update({ tvShowId, season, episode, userId }, action);
  }
}

export const episodesServices = new EpisodesServices();
