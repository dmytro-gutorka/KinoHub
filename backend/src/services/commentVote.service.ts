import { CommentVote } from '../entity/CommentVote.js';
import { commentVotesRepository } from '../repositories/commentVotes.repository.js';
import { HttpError } from '../errors/HttpError.js';
import { commentsRepository } from '../repositories/comments.repository.js';
import { AppDataSource } from '../config/db.js';

class CommentVoteService {
  async create(
    voteValue: 1 | -1,
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
      vote: 0,
      userId,
    });

    await commentVotesRepository.save(createdCommentVote);

    return await this.voteTransaction(voteValue, commentId, userId);
  }

  async update(
    voteValue: 1 | 0 | -1,
    commentId: number,
    userId: number | undefined
  ): Promise<CommentVote> {
    const commentVote: CommentVote | null = await commentVotesRepository.findOneBy({
      commentId,
      userId,
    });

    if (!commentVote) throw HttpError.NotFound('Comment vote not found');

    return await this.voteTransaction(voteValue, commentId, userId);
  }

  async voteTransaction(value: -1 | 0 | 1, commentId: number, userId: number | undefined) {
    return await AppDataSource.transaction(async (): Promise<CommentVote> => {
      const existing = (await commentVotesRepository.findOneBy({
        commentId,
        userId,
      })) as CommentVote;

      const deltaLike = (existing?.vote === 1 ? -1 : 0) + (value === 1 ? 1 : 0);
      const deltaDislike = (existing?.vote === -1 ? -1 : 0) + (value === -1 ? 1 : 0);

      if (existing) {
        existing.vote = value;
        await commentVotesRepository.save(existing);
      }

      await commentsRepository.increment({ id: commentId }, 'likesCount', deltaLike);
      await commentsRepository.increment({ id: commentId }, 'dislikesCount', deltaDislike);

      return existing;
    });
  }
}

export const commentVoteService = new CommentVoteService();
