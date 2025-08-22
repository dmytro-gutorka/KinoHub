import { fileURLToPath } from 'node:url';
import { MediaType, UserMediaAggregatedStats } from '../types/types.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { userRepository } from '../repositories/user.repository.js';
import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { MediaGenre } from '../entity/MediaGenre.js';
import { HttpError } from '../errors/HttpError.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { Episode } from '../entity/Episode.js';
import { Genre } from '../entity/Genre.js';
import { User } from '../entity/User.js';
import path from 'path';

import * as fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const userStatsSQL = fs.readFileSync(path.join(__dirname, './queries/user_stats_card.sql'), 'utf8');

class UserStatsService {
  constructor(private readonly ds: DataSource) {}

  async getUserMediaAggregatedStats(userId: number | undefined): Promise<UserMediaAggregatedStats> {
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (!user) throw HttpError.NotFound('User not found');

    const rows = await this.ds.query(userStatsSQL, [userId]);
    const row = rows[0] ?? {};

    return {
      avgRating: Number((row.avg_rating ?? 0).toFixed(1)),
      maxRating: Number(row.max_rating ?? 0),
      minRating: Number(row.min_rating ?? 0),
      ratingCount: Number(row.number_of_ratings ?? 0),
      runtimeMovie: Number(row.runtime_movie ?? 0),
      runtimeTv: Number(row.runtime_tv ?? 0),
      watchedMovie: Number(row.watched_movie ?? 0),
      watchedTv: Number(row.watched_tv ?? 0),
      watchedEpisodes: Number(row.episodes_watched ?? 0),
      commentsCount: Number(row.comment_count ?? 0),
    };
  }

  async getTopRatedMedia(
    userId: number | undefined,
    mediaType: MediaType,
    _limit: number = 10
  ): Promise<any> {
    return await this.ds
      .createQueryBuilder()
      .from(MediaUserAction, 'mua')
      .innerJoin(MediaInfo, 'mi', 'mi.id = mua.mediaInfoId')
      .select([
        'mua.rating AS "rating"',
        'mi.title AS "title"',
        'mi.posterPath AS "posterPath"',
        'mi.releaseDate AS "releaseDate"',
      ])
      .where('mua.userId = :userId', { userId })
      .andWhere('mua.mediaType = :mediaType', { mediaType })
      .andWhere('mua.rating IS NOT NULL')
      .orderBy('mua.rating', 'DESC')
      .limit(_limit)
      .getRawMany();
  }

  async getFavoriteGenres(userId: number | undefined, _limit: number = 5): Promise<any> {
    return await this.ds
      .createQueryBuilder()
      .select(['g.name as name', 'COUNT(g.name)'])
      .from(MediaUserAction, 'mua')
      .where('mua.userId = :userId', { userId })
      .innerJoin(MediaInfo, 'mi', 'mi.id = mua.mediaInfoId')
      .innerJoin(MediaGenre, 'mg', 'mi.id = mg.mediaItemId')
      .innerJoin(Genre, 'g', 'g.id = mg.genreId')
      .groupBy('g.name')
      .orderBy('COUNT(g.name)', 'DESC')
      .limit(_limit)
      .getRawMany();
  }

  async getTvShowInProgress(userId?: number) {
    const watchedEpisodes = this.ds
      .createQueryBuilder()
      .from(Episode, 'e')
      .select('e.tvShowId', 'tvShowId') // -> AS "tvShowId"
      .addSelect('COUNT(*)::int', 'totalWatchedEpisodes') // -> AS "totalWatchedEpisodes"
      .where('e.userId = :userId', { userId })
      .andWhere('e.isWatched = true')
      .groupBy('e.tvShowId');

    return this.ds
      .createQueryBuilder()
      .from(`(${watchedEpisodes.getQuery()})`, 'we')
      .leftJoin(MediaInfo, 'mi', `mi.mediaId = we."tvShowId"`) // << важные кавычки
      .select([
        `we."tvShowId" AS "tvShowId"`,
        `we."totalWatchedEpisodes" AS "totalWatchedEpisodes"`,
        `mi.totalEpisodes AS "totalEpisodes"`,
        `mi.totalSeasons AS "totalSeasons"`,
        `mi.title AS "title"`,
        `mi.releaseDate AS "releaseDate"`,
        `mi.voteAverage AS "voteAverage"`,
        `mi.status AS "status"`,
        `mi.posterPath AS "posterPath"`,
      ])
      .setParameters(watchedEpisodes.getParameters())
      .getRawMany();
  }

  // async getTvShowInProgress(userId: number | undefined) {
  //   return await this.ds
  //     .createQueryBuilder()
  //     .select([
  //       'e.tvShowId AS tvShowId',
  //       'CAST(COUNT(*) AS INT) AS totalWatchedEpisodes',
  //       `${this.ds
  //         .createQueryBuilder()
  //         .subQuery()
  //         .select([
  //           'mi.totalEpisodes',
  //           'mi.totalSeasons',
  //           'mi.title',
  //           'mi.voteAverage',
  //           'mi.releaseDate',
  //           'mi.status',
  //         ])
  //         .from(MediaInfo, 'mi')
  //         .where('mi.mediaId = e.tvShowId')
  //         .getQuery()} AS totalEpisodes`,
  //     ])
  //     .from(Episode, 'e')
  //     .where('e.userId = :userId', { userId })
  //     .andWhere('e.isWatched = true')
  //     .groupBy('e.tvShowId')
  //     .getRawMany();
  // }
}

export const usersStatsService = new UserStatsService(AppDataSource);
