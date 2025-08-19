import { AppDataSource } from '../config/db.js';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { Repository } from 'typeorm';

export const actionsRepository: Repository<MediaUserAction> =
  AppDataSource.getRepository(MediaUserAction);
