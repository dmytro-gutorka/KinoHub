import updateComment from '@shared/api/comments/updateComment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MediaType } from '@shared/types/generalTypes';

export default function useUpdateComment(commentId: number, mediaId: number, mediaType: MediaType) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (review: string) => updateComment(commentId, review),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] });
    },
  });
}
