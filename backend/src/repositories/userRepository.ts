import { AppDataSource } from '../config/db.js';
import { User } from '../entity/User.js';

export const userRepository = AppDataSource.getRepository(User);
