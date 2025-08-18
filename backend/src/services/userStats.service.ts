import { userRepository } from '../repositories/user.repository.js';
import { AppDataSource } from '../config/db.js';
import { DataSource } from 'typeorm';
import { HttpError } from '../errors/HttpError.js';
import { User } from '../entity/User.js';
import path from 'path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const userStatsSQL = fs.readFileSync(path.join(__dirname, './queries/user_stats_card.sql'), 'utf8');

export type UserStatsCard = {
  number_of_ratings: number;
  avg_rating: number | null;
  max_rating: number | null;
  min_rating: number | null;
  runtime_movie: number;
  runtime_tv: number;
  watched_movie: number;
  watched_tv: number;
  comment_count: number;
  episodes_watched: number;
};

class UserStatsService {
  constructor(private readonly ds: DataSource) {}

  async getCard(userId: number | undefined): Promise<void> {
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (!user) throw HttpError.NotFound('User not found');

    const rows = await this.ds.query(userStatsSQL, [userId]);

    console.log('rows', rows);
    console.log('===========================================================================');
    console.log('sql file data', userStatsSQL);
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