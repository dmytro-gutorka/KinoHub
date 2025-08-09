import { Request, Response } from 'express';
import { commentVoteService } from '../services/commentVote.service.js';
import { CommentVote } from '../entity/CommentVote.js';

export async function createCommentVote(req: Request, res: Response): Promise<void> {
  const voteValue: 1 | -1 = req.body.voteValue;
  const commentId: number = Number(req.params.commentId);
  const userId: number | undefined = Number(req.user?.id);

  const commentVote: CommentVote = await commentVoteService.create(voteValue, commentId, userId);

  res.status(201).json(commentVote);
}

export async function updateCommentVote(req: Request, res: Response): Promise<void> {
  const voteValue: 1 | -1 = req.body.voteValue;
  const commentId: number = Number(req.params.commentId);
  const userId: number | undefined = Number(req.user?.id);

  const commentVote: CommentVote = await commentVoteService.update(voteValue, commentId, userId);

  res.status(200).json(commentVote);
}
