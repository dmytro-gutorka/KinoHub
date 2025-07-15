import { AppDataSource } from '../config/db.js';
import { UserAuthentication } from '../entity/UserAuthentication.js';

export const userAuthRepository = AppDataSource.getRepository(UserAuthentication);
