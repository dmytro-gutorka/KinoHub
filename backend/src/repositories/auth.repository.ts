import { AppDataSource } from '../config/db.js';
import { UserAuth } from '../entity/UserAuth.js';

export const authRepository = AppDataSource.getRepository(UserAuth);
