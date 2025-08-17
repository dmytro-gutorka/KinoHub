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
// AVG(rating) AS avg_rating,
//   MAX(rating) AS max_rating,
//   MIN(rating) AS min_rating
// FROM
// "media_user_action"
// WHERE
// "userId" = 1

// Favorites genres 3-5
// Number of rated MEDIA
// Number of comments
// Number of watched EPISODES

// Number of watched MOVIES
// Number of watched TV

// Overall MOVIES runtime
// Overall TV runtime

// Most rater MOVIES
// Most rater TV

// ?? Times Rewatched
// ?? Review likes received