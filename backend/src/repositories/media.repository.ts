import { AppDataSource } from '../config/db.js';
import { Repository } from 'typeorm';
import { MediaInfo } from '../entity/MediaInfo.js';

export const mediaRepository: Repository<MediaInfo> = AppDataSource.getRepository(MediaInfo);
