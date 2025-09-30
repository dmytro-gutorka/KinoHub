import { friendsRequestRepository } from '../config/repositories.js';
import { HttpError } from '../errors/HttpError.js';

class FriendsService {
  async getFriends() {}

  async deleteFriend() {}

  async createFriendRequest(userId: number, receiverId: number): Promise<void> {
    const friendRequest = await friendsRequestRepository.findOneBy({
      requesterId: userId,
      receiverId,
    });

    if (friendRequest) throw HttpError.Conflict('Friend request already exists');
  }
}

export const friendsService = new FriendsService();
