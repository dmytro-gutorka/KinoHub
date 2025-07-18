import { AppDataSource } from '../config/db.js';
import { MediaEpisode } from '../entity/MediaEpisode.js';
import { Repository } from 'typeorm';

export const episodesRepository: Repository<MediaEpisode> =
  AppDataSource.getRepository(MediaEpisode);
