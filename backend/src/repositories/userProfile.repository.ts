import { Repository } from 'typeorm';
import { UserProfile } from '../entity/UserProfile.js';
import { AppDataSource } from '../config/db.js';

export const userProfileRepository: Repository<UserProfile> =
  AppDataSource.getRepository(UserProfile);
