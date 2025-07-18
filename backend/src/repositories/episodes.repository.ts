import { AppDataSource } from '../config/db.js';
import { MediaEpisodes } from '../entity/MediaEpisodes.js';
import { Repository } from 'typeorm';

export const episodesRepository: Repository<MediaEpisodes> =
  AppDataSource.getRepository(MediaEpisodes);
