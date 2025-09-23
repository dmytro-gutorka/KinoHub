import { MediaType } from '@shared/types/generalTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteComment from '@shared/api/kinohub/services/comments/deleteComment';

export default function useDeleteComment(commentId: number, mediaId: number, mediaType: MediaType) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteComment(commentId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] }),
  });
}
