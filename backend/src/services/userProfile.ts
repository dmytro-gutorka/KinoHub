import { User } from '../entity/User.js';
import { userRepository } from '../repositories/user.repository.js';
import { UserProfile } from '../entity/UserProfile.js';
import { plainToInstance } from 'class-transformer';

class UserProfileService {
  async getUserProfile(userId: number): Promise<UserProfile> {
    const user: User | null = await userRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });

    if (!user) throw new Error('User not found');

    return plainToInstance(UserProfile, user.profile);
  }
}

export const userProfileService = new UserProfileService();
