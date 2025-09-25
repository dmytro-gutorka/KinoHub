import { AppDataSource } from '../config/db.js';
import { Repository } from 'typeorm';
import { MediaUserAction } from '../entity/MediaUserAction.js';
import { ActivityLog } from '../entity/ActivityLog.js';
import { CommentVote } from '../entity/CommentVote.js';
import { UserProfile } from '../entity/UserProfile.js';
import { MediaGenre } from '../entity/MediaGenre.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { UserAuth } from '../entity/UserAuth.js';
import { Episode } from '../entity/Episode.js';
import { Comment } from '../entity/Comment.js';
import { Genre } from '../entity/Genre.js';
import { User } from '../entity/User.js';

export const mediaRepository: Repository<MediaInfo> = AppDataSource.getRepository(MediaInfo);
export const authRepository = AppDataSource.getRepository(UserAuth);
export const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment);
export const episodesRepository: Repository<Episode> = AppDataSource.getRepository(Episode);
export const genresRepository: Repository<Genre> = AppDataSource.getRepository(Genre);
export const userRepository: Repository<User> = AppDataSource.getRepository(User);
export const activityLogRepository = AppDataSource.getRepository(ActivityLog);

export const userProfileRepository: Repository<UserProfile> =
  AppDataSource.getRepository(UserProfile);

export const mediaGenresRepository: Repository<MediaGenre> =
  AppDataSource.getRepository(MediaGenre);

export const actionsRepository: Repository<MediaUserAction> =
  AppDataSource.getRepository(MediaUserAction);

export const commentVotesRepository: Repository<CommentVote> =
  AppDataSource.getRepository(CommentVote);
