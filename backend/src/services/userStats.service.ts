import { userRepository } from '../repositories/user.repository.js';
import { HttpError } from '../errors/HttpError.js';
import { User } from '../entity/User.js';
import * as fs from 'node:fs';
import path from 'path';

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
  async getBy(userId: number | undefined) {
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (!user) throw HttpError.NotFound('User not found');
  }
}

export const usersService = new UserStatsService();

// AVG/MAX/MIN rating:
// SELECT
//    COUNT(*) AS number_of_ratings,
//    AVG(rating) AS avg_rating,
//    MAX(rating) AS max_rating,
//    MIN(rating) AS min_rating
// FROM
//    "media_user_action"
// WHERE
//    "userId" = 1

// Overall MOVIES/TV runtime
// SELECT
//    mi."mediaType",
//    SUM(mi."runtime") AS total_runtime
// FROM
//    "media_user_action" AS mua
// JOIN
//    "media_info" AS mi
// ON
//    mi."id" = mua."mediaInfoId"
// WHERE
//    mua."userId" = 1
// GROUP BY
//    mi."mediaType";

// Number of comments
// SELECT
//    COUNT(*)
// FROM
//    "comments"
// WHERE
//    "userId" = 1

// Number of watched MOVIES/TV
// SELECT
//    mua."mediaType",
//    COUNT(*)
// FROM
//    "media_user_action" as mua
// LEFT JOIN
//    "media_info" as mi
// ON
//    "mi"."id" = "mua"."mediaInfoId"
// WHERE
//    mua."userId" = 1 AND mua."isWatched" = true
// GROUP BY
//    mua."mediaType";

// Number of watched EPISODES
// SELECT
//    COUNT(*)
// FROM
//    "episode"
// WHERE
//    "isWatched" = true
// AND
//    "userId" = 1;

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