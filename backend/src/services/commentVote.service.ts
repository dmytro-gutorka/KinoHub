import { CommentVote } from '../entity/CommentVote.js';
import { commentVotesRepository } from '../repositories/commentVotes.repository.js';
import { HttpError } from '../errors/HttpError.js';
import { commentsRepository } from '../repositories/comments.repository.js';

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
      vote: voteValue,
      userId,
    });

    await this.voteTransaction(voteValue, commentId, userId);

    return await commentVotesRepository.save(createdCommentVote);
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

    if (!commentVote) throw HttpError.NotFound('You have already voted for this comment');

    commentVote.vote = voteValue;

    await this.voteTransaction(voteValue, commentId, userId);

    return await commentVotesRepository.save(commentVote);
  }

  async voteTransaction(
    value: -1 | 0 | 1,
    commentId: number,
    userId: number | undefined
  ): Promise<void> {
    const existing: CommentVote | null = await commentVotesRepository.findOneBy({
      commentId,
      userId,
    });

    const deltaLike = (existing?.vote === 1 ? -1 : 0) + (value === 1 ? 1 : 0);
    const deltaDislike = (existing?.vote === -1 ? -1 : 0) + (value === -1 ? 1 : 0);

    await commentsRepository.increment({ id: commentId }, 'likesCount', deltaLike);
    await commentsRepository.increment({ id: commentId }, 'dislikesCount', deltaDislike);
  }
}

export const commentVoteService = new CommentVoteService();
