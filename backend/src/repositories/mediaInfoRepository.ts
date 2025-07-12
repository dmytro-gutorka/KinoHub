import { AppDataSource } from '../config/db.js';
import { MediaInfo } from '../entity/MediaInfo.js';

export const mediaInfoRepository = AppDataSource.getRepository(MediaInfo);
