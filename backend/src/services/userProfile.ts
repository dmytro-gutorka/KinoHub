import { User } from '../entity/User.js';
import { UserProfile } from '../entity/UserProfile.js';
import { plainToInstance } from 'class-transformer';
import { userProfileRepository, userRepository } from '../config/repositories.js';

class UserProfileService {
  async getUserProfile(userId: number): Promise<UserProfile> {
    const user: User | null = await userRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });

    if (!user) throw new Error('User not found');

    // return plainToInstance(UserProfile, user.profile);
    return user.profile;
  }

  async updateUserProfile(userId: number, userProfile: UserProfile): Promise<void> {
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (!user) throw new Error('User not found');
    if (!user?.profile) throw new Error('User profile not found');

    await userProfileRepository.update(
      { id: userProfile.id },
      { ...userProfile, social: { ...user.profile.social, ...userProfile?.social } }
    );
  }
}

export const userProfileService = new UserProfileService();
