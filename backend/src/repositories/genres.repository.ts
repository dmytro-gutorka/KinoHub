import { Repository } from 'typeorm';
import { Genre } from '../entity/Genre.js';
import { AppDataSource } from '../config/db.js';

export const genresRepository: Repository<Genre> = AppDataSource.getRepository(Genre);
