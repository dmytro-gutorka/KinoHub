import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { CommentVoteValue } from '@features/comments/ui/CommentActionButtonList';

export default async function createCommentVote(
  commentId: number,
  commentActionValue: { vote: CommentVoteValue }
) {
  const url: string = apiPath.commentsVote.create(commentId);
  const response = await axiosWithAuth.post(url, commentActionValue);

  return response?.data;
}
