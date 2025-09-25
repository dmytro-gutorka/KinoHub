import { MediaType } from '../types/types.js';
import { Comment } from '../entity/Comment.js';
import { HttpError } from '../errors/HttpError.js';
import { IsNull } from 'typeorm';
import { commentsRepository } from '../config/repositories.js';

class CommentsService {
  async getList(mediaId: number, mediaType: MediaType): Promise<Comment[]> {
    const comments: Comment[] = await commentsRepository.find({
      where: { mediaId, mediaType, parentId: IsNull() },
      relations: ['children'],
    });

    if (!comments) throw HttpError.NotFound('Comments not found');

    return comments;
  }

  async create(
    review: string,
    mediaType: MediaType,
    mediaId: number,
    parentId: number | null,
    userId: number | undefined
  ): Promise<Comment> {
    const comment: Comment = commentsRepository.create({
      review,
      mediaType,
      mediaId,
      parentId,
      userId,
    });

    await commentsRepository.save(comment);

    return comment;
  }

  async update(
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

  async delete(commentId: number, userId: number | undefined): Promise<void> {
    const comment: Comment | null = await commentsRepository.findOneBy({ id: commentId });

    if (!comment) throw HttpError.NotFound('Comment not found');
    if (comment.userId !== userId)
      throw HttpError.Forbidden('You are not authorized to delete other users comments');

    await commentsRepository.delete({ id: commentId });
  }
}

export const commentsService = new CommentsService();
