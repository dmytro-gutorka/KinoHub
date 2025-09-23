import { User } from '../entity/User.js';
import { userRepository } from '../repositories/user.repository.js';
import { UserProfile } from '../entity/UserProfile.js';

class UserProfileService {
  async getUserProfile(userId: number): Promise<UserProfile> {
    const user: User | null = await userRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });

    console.log(user);

    if (!user) throw new Error('User not found');

    return user.profile;
  }
}

export const userProfileService = new UserProfileService();
