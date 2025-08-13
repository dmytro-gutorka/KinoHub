import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { CommentVoteValue } from '@features/comments/ui/CommentActionButtonList';

export default async function createCommentVote(
  commentId: number,
  commentActionValue: { vote: CommentVoteValue }
) {
  console.log('create', commentActionValue);

  const url: string = apiPath.commentsVote.create(commentId);
  const response = await axiosWithAuth.post(url, commentActionValue);

  return response?.data;
}
