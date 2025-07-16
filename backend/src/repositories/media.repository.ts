import { AppDataSource } from '../config/db.js';
import { MediaInfo } from '../entity/MediaInfo.js';

export const mediaRepository = AppDataSource.getRepository(MediaInfo);
