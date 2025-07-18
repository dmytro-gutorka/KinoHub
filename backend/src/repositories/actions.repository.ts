import { AppDataSource } from '../config/db.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';

export const actionsRepository = AppDataSource.getRepository(MediaUserAction);
