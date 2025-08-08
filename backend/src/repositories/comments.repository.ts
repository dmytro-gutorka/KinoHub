import { AppDataSource } from '../config/db.js';
import { Repository } from 'typeorm';
import { Comment } from '../entity/Comment.js';

export const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment);
