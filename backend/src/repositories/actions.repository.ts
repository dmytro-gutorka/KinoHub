import { AppDataSource } from '../config/db.js';
import { MediaUserActions } from '../entity/MediaUserActions.js';

export const actionsRepository = AppDataSource.getRepository(MediaUserActions);
