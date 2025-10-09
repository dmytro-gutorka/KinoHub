import { Request, Response } from 'express';
import { commentVoteService, CommentVoteValueType } from '../services/comment-vote.service.js';
import { CommentVote } from '../entity/CommentVote.js';

export async function createCommentVote(req: Request, res: Response): Promise<void> {
  const vote: Exclude<CommentVoteValueType, 0> = req.body.vote;
  const commentId: number = Number(req.params.commentId);
  const userId: number | undefined = Number(req.user?.id);

  const commentVote: CommentVote = await commentVoteService.create(vote, commentId, userId);

  res.status(201).json(commentVote);
}

export async function updateCommentVote(req: Request, res: Response): Promise<void> {
  const vote: CommentVoteValueType = req.body.vote;
  const commentId: number = Number(req.params.commentId);
  const userId: number | undefined = Number(req.user?.id);

  const commentVote: CommentVote = await commentVoteService.update(vote, commentId, userId);

  res.status(200).json(commentVote);
}
