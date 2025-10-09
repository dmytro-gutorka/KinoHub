import { Action, WatchedEpisodesPerSeason } from '../types/types.js';
import { Episode } from '../entity/Episode.js';
import { HttpError } from '../errors/HttpError.js';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../config/db.js';
import { episodesRepository } from '../config/repositories.js';

export class EpisodeServices {
  constructor(private readonly dt: DataSource) {}

  async getListBy(
    tvShowId: number,
    userId: number | undefined,
    season: number
  ): Promise<Episode[]> {
    const episodes: Episode[] = await Episode.findBy({ tvShowId, season, userId });

    if (episodes.length === 0) throw HttpError.NotFound('Episodes not found');

    return episodes;
  }

  async getWatchedEpisodes(
    userId: number | undefined,
    tvShowId: number
  ): Promise<WatchedEpisodesPerSeason[]> {
    return await this.dt
      .createQueryBuilder(Episode, 'ep')
      .select('ep.season', 'season')
      .addSelect('COUNT(*)::int', 'watchedEpisodes')
      .where('ep.tvShowId = :tvShowId', { tvShowId })
      .andWhere('ep.userId = :userId', { userId })
      .groupBy('ep.season')
      .getRawMany();
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

export const episodesServices = new EpisodeServices(AppDataSource);
