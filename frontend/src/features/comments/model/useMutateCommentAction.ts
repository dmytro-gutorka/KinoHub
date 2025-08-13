import { CommentVoteValue } from '@features/comments/ui/CommentActionButtonList';
import { MediaType } from '@shared/types/generalTypes';
import { useMutation } from '@tanstack/react-query';
import updateCommentVote from '@shared/api/kinohub/services/commentsVote/updateCommentVote';
import queryClient from '@app/queryClient';
import createCommentVote from '@shared/api/kinohub/services/commentsVote/createCommentVote';

export default function useMutateCommentAction(
  commentId: number,
  mediaId: number,
  mediaType: MediaType
) {
  const { mutate } = useMutation({
    mutationKey: ['comments', mediaId, mediaType],
    mutationFn: (commentActionValue: { vote: CommentVoteValue }) =>
      updateCommentVote(commentId, commentActionValue),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] }),
    onError: (_, variables: { vote: CommentVoteValue }) => createCommentVote(commentId, variables),
  });

  return {
    mutate,
  };
}
