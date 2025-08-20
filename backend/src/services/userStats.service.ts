import { fileURLToPath } from 'node:url';
import { MediaType, UserMediaAggregatedStats } from '../types/types.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { userRepository } from '../repositories/user.repository.js';
import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { HttpError } from '../errors/HttpError.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { User } from '../entity/User.js';
import path from 'path';

import * as fs from 'node:fs';
import { MediaGenre } from '../entity/MediaGenre.js';
import { Genre } from '../entity/Genre.js';

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
      avgRating: row.avg_rating == null ? null : Number(row.avg_rating),
      maxRating: row.max_rating == null ? null : Number(row.max_rating),
      minRating: row.min_rating == null ? null : Number(row.min_rating),
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
    _limit: number = 5
  ): Promise<any> {
    return await this.ds
      .createQueryBuilder()
      .from(MediaUserAction, 'mua')
      .innerJoin(MediaInfo, 'mi', 'mi.id = mua.mediaInfoId')
      .select(['mua.rating AS "rating"', 'mi.title AS "title"'])
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
      .select(['g.name', 'COUNT(g.name)'])
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
}

export const usersStatsService = new UserStatsService(AppDataSource);
