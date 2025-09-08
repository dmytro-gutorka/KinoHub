import { useMutation, useQueryClient } from '@tanstack/react-query';
import createComment from '@shared/api/kinohub/services/comments/createComment';
import { MediaType } from '@shared/types/generalTypes';

export default function useCreateComment(mediaId: number, mediaType: MediaType, reset) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (review: string) => createComment(mediaId, mediaType, review),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] });

      reset();
    },
  });
}
