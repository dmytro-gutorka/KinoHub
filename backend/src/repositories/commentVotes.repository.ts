import { Repository } from 'typeorm';
import { AppDataSource } from '../config/db.js';
import { CommentVote } from '../entity/CommentVote.js';

export const commentVotesRepository: Repository<CommentVote> =
  AppDataSource.getRepository(CommentVote);
