import { fileURLToPath } from 'node:url';
import { MediaType, UserStatsCard } from '../types/types.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { userRepository } from '../repositories/user.repository.js';
import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { HttpError } from '../errors/HttpError.js';
import { User } from '../entity/User.js';
import path from 'path';

import * as fs from 'node:fs';
import { MediaInfo } from '../entity/MediaInfo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const userStatsSQL = fs.readFileSync(path.join(__dirname, './queries/user_stats_card.sql'), 'utf8');

class UserStatsService {
  constructor(private readonly ds: DataSource) {}

  async getCard(userId: number | undefined): Promise<UserStatsCard> {
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (!user) throw HttpError.NotFound('User not found');

    const rows = await this.ds.query(userStatsSQL, [userId]);
    const row = rows[0] ?? {};

    return {
      number_of_ratings: Number(row.number_of_ratings ?? 0),
      avg_rating: row.avg_rating == null ? null : Number(row.avg_rating),
      max_rating: row.max_rating == null ? null : Number(row.max_rating),
      min_rating: row.min_rating == null ? null : Number(row.min_rating),
      runtime_movie: Number(row.runtime_movie ?? 0),
      runtime_tv: Number(row.runtime_tv ?? 0),
      watched_movie: Number(row.watched_movie ?? 0),
      watched_tv: Number(row.watched_tv ?? 0),
      comment_count: Number(row.comment_count ?? 0),
      episodes_watched: Number(row.episodes_watched ?? 0),
    };
  }

  async getTopRatedMedia(userId: number | undefined, mediaType: MediaType): Promise<any> {
    return await this.ds
      .createQueryBuilder()
      .from(MediaUserAction, 'mua')
      .innerJoin(MediaInfo, 'mi', 'mi.id = mua.mediaInfoId')
      .select(['mua.rating AS "rating"', 'mi.title AS "title"'])
      .where('mua.userId = :userId', { userId })
      .andWhere('mua.mediaType = :mediaType', { mediaType })
      .andWhere('mua.rating IS NOT NULL')
      .orderBy('mua.rating', 'DESC')
      .limit(10)
      .getRawMany();
  }
}

export const usersStatsService = new UserStatsService(AppDataSource);

// TOP 10 rated movies/tv show
// SELECT
//    "mediaInfoId",
//    "rating",
//    "mediaType"
// FROM
//    "media_user_action"
// WHERE
//     "userId" = 1 AND "mediaType" = 'movie' / 'tv'
// ORDER BY
//    "rating" DESC
// LIMIT
//    10;

// TOP 3-5 genres
// ?? Times Rewatched
// ?? Review likes received