import { MediaType } from '../types/types.js';
import { commentsRepository, mediaRepository } from '../config/repositories.js';
import { activityLogService } from './activity-log.service.js';
import { HttpError } from '../errors/HttpError.js';
import { Comment } from '../entity/Comment.js';
import { IsNull } from 'typeorm';

class CommentsService {
  async getList(mediaId: number, mediaType: MediaType): Promise<Comment[]> {
    const comments: Comment[] = await commentsRepository.find({
      where: { mediaId, mediaType, parentId: IsNull() },
      relations: ['children'],
    });

    if (!comments) throw HttpError.NotFound('Comments not found');

    return comments;
  }

  async createComment(
    review: string,
    mediaType: MediaType,
    mediaId: number,
    parentId: number | null,
    userId: number
  ): Promise<Comment> {
    const mediaInfo = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (!mediaInfo) throw HttpError.NotFound('Media info not found');

    const comment: Comment = commentsRepository.create({
      review,
      mediaType,
      mediaId,
      parentId,
      userId,
    });

    await commentsRepository.save(comment);

    await activityLogService.toggleActivityLog(
      { comment: true },
      userId,
      mediaId,
      mediaType,
      mediaInfo.id,
      comment.id
    );

    return comment;
  }

  async updateComment(
    updatedReview: string,
    commentId: number,
    userId: number | undefined
  ): Promise<Comment> {
    const comment: Comment | null = await commentsRepository.findOneBy({ id: commentId });

    if (!comment) throw HttpError.NotFound('Comment not found');
    if (comment.userId !== userId)
      throw HttpError.Forbidden('You are not authorized to update other users comments');

    comment.review = updatedReview;

    return commentsRepository.save(comment);
  }

  async deleteComment(commentId: number, userId: number): Promise<void> {
    const comment = await commentsRepository.findOneBy({ id: commentId });

    if (!comment) throw HttpError.NotFound('Comment not found');

    const mediaInfo = await mediaRepository.findOneBy({
      mediaId: comment?.mediaId,
      mediaType: comment?.mediaType,
    });

    if (!mediaInfo) throw HttpError.NotFound('Media info not found');

    if (comment.userId !== userId)
      throw HttpError.Forbidden('You are not authorized to delete other users comments');

    await commentsRepository.delete({ id: commentId });

    await activityLogService.toggleActivityLog(
      { comment: false },
      userId,
      comment.mediaId,
      comment.mediaType,
      mediaInfo.id,
      comment.id
    );
  }
}

export const commentsService = new CommentsService();
