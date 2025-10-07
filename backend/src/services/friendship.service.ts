import { friendshipRepository } from '../config/repositories.js';

class FriendshipService {

  async getFriends(userId: number) {
    return await friendshipRepository.findBy({ userId })
  }
}


export const friendshipService = new FriendshipService();