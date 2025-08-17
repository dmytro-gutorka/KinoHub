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
// SELECT
//    AVG(runtime)
// FROM
//    "media_user_action" as mua
// LEFT JOIN
//    "media_info" as mi
// ON
//    "mi"."id" = "mua"."mediaInfoId"
// WHERE
//    "userId" = 1 AND "mi"."mediaType" = 'movie';

// Favorites genres 3-5
// Number of watched EPISODES

// Number of watched MOVIES
// Number of watched TV

// ?? Times Rewatched
// ?? Review likes received