import { AppDataSource } from '../config/db.js';
import { User } from '../entity/User.js';
import { Repository } from 'typeorm';

export const userRepository: Repository<User> = AppDataSource.getRepository(User);
