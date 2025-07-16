import { AppDataSource } from '../config/db.js';
import { UserAuthentication } from '../entity/UserAuthentication.js';

export const authRepository = AppDataSource.getRepository(UserAuthentication);
