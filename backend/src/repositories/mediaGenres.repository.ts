import { AppDataSource } from '../config/db.js';
import { MediaGenre } from '../entity/MediaGenre.js';
import { Repository } from 'typeorm';

export const mediaGenresRepository: Repository<MediaGenre> =
  AppDataSource.getRepository(MediaGenre);
