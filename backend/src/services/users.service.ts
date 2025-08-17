import { User } from '../entity/User.js';
import { userRepository } from '../repositories/user.repository.js';
import { HttpError } from '../errors/HttpError.js';

class UsersService {
  getBy(userId: number | undefined) {
    const user: User = userRepository.findOneBy({ id: userId });

    if (!user) throw HttpError.NotFound('User not found');
  }
}

export const usersService = new UsersService();

// AVG/MAX/MIN rating:
// SELECT
//     COUNT(*) AS number_of_ratings,
//     AVG(rating) AS avg_rating,
//     MAX(rating) AS max_rating,
//     MIN(rating) AS min_rating
// FROM
//     "media_user_action"
// WHERE
//     "userId" = 1

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

// Number of comments
// SELECT
//    COUNT(*)
// FROM
//    "comments"
// WHERE
//    "userId" = 1

// Overall MOVIES runtime
// Overall TV runtime

// VARIANT 1:
// SELECT
//    SUM(CASE WHEN "mi"."mediaType" = 'movie' THEN "mi"."runtime" ELSE 0 END) as overall_movie_runtime,
//    SUM(CASE WHEN "mi"."mediaType" = 'tv' THEN "mi"."runtime" ELSE 0 END) as overall_tv_runtime
// FROM "media_user_action" as mua
//     LEFT JOIN "media_info" as mi ON "mi"."id" = "mua"."mediaInfoId"
// WHERE mua."userId" = 1;

// VARIANT 2:
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
//     mi."mediaType";

// Number of watched MOVIES/TV
// SELECT
//     mua."mediaType",
//     COUNT(*)
// FROM "media_user_action" as mua
//          LEFT JOIN "media_info" as mi ON "mi"."id" = "mua"."mediaInfoId"
// WHERE
//     mua."userId" = 1 AND mua."isWatched" = true
// GROUP BY
//     mua."mediaType";

// Number of watched EPISODES
// SELECT
//     COUNT(*)
// FROM "episode"
//     WHERE
//         "isWatched" = true
//       AND
//         "userId" = 1;

// Favorites genres 3-5
// ?? Times Rewatched
// ?? Review likes received