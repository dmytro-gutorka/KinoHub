import { AppDataSource } from '../config/db.js';
import { Episode } from '../entity/Episode';
import { Repository } from 'typeorm';

export const episodesRepository: Repository<Episode> = AppDataSource.getRepository(Episode);
