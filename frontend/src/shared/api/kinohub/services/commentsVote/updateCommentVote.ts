import { apiPath } from '@shared/api/kinohub/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohub-axios';
import { CommentVoteValue } from '@features/comments/ui/CommentActionButtonList';

export default async function updateCommentVote(
  commentId: number,
  commentActionValue: { vote: CommentVoteValue }
) {
  const url: string = apiPath.commentsVote.update(commentId);
  const response = await axiosWithAuth.patch(url, commentActionValue);

  return response?.data;
}
