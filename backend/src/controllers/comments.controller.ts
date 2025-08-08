import { MediaType } from '../types/types.js';
import { Request, Response } from 'express';
import { Comment } from '../entity/Comment.js';
import { commentsService } from '../services/comments.service.js';

export async function getCommentList(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaType: MediaType = req.query.media_type;
  const mediaId: number = req.params.mediaId;

  const comments: Array<Comment> = await commentsService.getList(mediaId, mediaType);

  res.status(200).json(comments);
}

export async function createComment(
  req: Request<any, any, any, { media_type: MediaType; parent_id?: number | null }>,
  res: Response
): Promise<void> {
  const overview: string = req.body.review;
  const mediaType: MediaType = req.query.media_type;
  const mediaId: number = req.params.mediaId;
  const parentId: number | null = req.query.parent_id || null;
  const userId: number | undefined = req.user?.id;

  const comment: Comment = await commentsService.create(
    overview,
    mediaType,
    mediaId,
    parentId,
    userId
  );

  res.status(201).json(comment);
}

export async function updateComment(req: Request, res: Response): Promise<void> {
  const updatedReview: string = req.body.updatedReview;
  const commentId: number = Number(req.params.commentId);
  const userId: number | undefined = req.user?.id;

  const updatedComment: Comment = await commentsService.update(updatedReview, commentId, userId);

  res.status(200).json(updatedComment);
}

export async function deleteComment(req: Request, res: Response): Promise<void> {
  const commentId: number = Number(req.params.commentId);
  const userId: number | undefined = req.user?.id;

  await commentsService.delete(commentId, userId);

  res.status(204).json({ message: `Comment ${commentId} is deleted` });
}
