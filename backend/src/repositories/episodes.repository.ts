import { AppDataSource } from '../config/db.js';
import { Episode } from '../entity/Episode.js';
import { Repository } from 'typeorm';

export const episodesRepository: Repository<Episode> = AppDataSource.getRepository(Episode);
