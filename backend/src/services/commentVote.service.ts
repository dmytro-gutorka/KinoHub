import { CommentVote } from '../entity/CommentVote.js';
import { commentVotesRepository } from '../repositories/commentVotes.repository.js';
import { HttpError } from '../errors/HttpError.js';
import { commentsRepository } from '../repositories/comments.repository.js';
import { AppDataSource } from '../config/db.js';

export type CommentVoteValueType = -1 | 0 | 1; // TODO: move to somewhere

class CommentVoteService {
  async create(
    vote: Exclude<CommentVoteValueType, 0>,
    commentId: number,
    userId: number | undefined
  ): Promise<CommentVote> {
    const commentVote: CommentVote | null = await commentVotesRepository.findOneBy({
      commentId,
      userId,
    });

    if (commentVote) throw HttpError.Conflict('You have already voted for this comment');

    const createdCommentVote: CommentVote = commentVotesRepository.create({
      commentId,
      vote: vote,
      userId,
    });

    await this.voteTransaction(vote, commentId, userId);
    await commentVotesRepository.save(createdCommentVote);

    return createdCommentVote;
  }

  async update(
    vote: CommentVoteValueType,
    commentId: number,
    userId: number | undefined
  ): Promise<CommentVote> {
    const commentVote: CommentVote | null = await commentVotesRepository.findOneBy({
      commentId,
      userId,
    });

    if (!commentVote) throw HttpError.NotFound('Comment vote not found');

    return await this.voteTransaction(vote, commentId, userId);
  }

  async voteTransaction(vote: CommentVoteValueType, commentId: number, userId: number | undefined) {
    return await AppDataSource.transaction(async (): Promise<CommentVote> => {
      const existing = (await commentVotesRepository.findOneBy({
        commentId,
        userId,
      })) as CommentVote;

      const deltaLike = (existing?.vote === 1 ? -1 : 0) + (vote === 1 ? 1 : 0);
      const deltaDislike = (existing?.vote === -1 ? -1 : 0) + (vote === -1 ? 1 : 0);

      if (existing) {
        existing.vote = vote;
        await commentVotesRepository.save(existing);
      }

      await commentsRepository.increment({ id: commentId }, 'likesCount', deltaLike);
      await commentsRepository.increment({ id: commentId }, 'dislikesCount', deltaDislike);

      return existing;
    });
  }
}

export const commentVoteService = new CommentVoteService();
