import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateMediaAction from '@shared/api/kinohub/services/actions/updateMediaAction';
import { MediaType, MediaUserActions } from '@shared/types/generalTypes';

export default function useMediaAction(mediaId: number, mediaType: MediaType) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (action: Partial<MediaUserActions>) =>
      updateMediaAction(mediaId, mediaType, action),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['mediaAction', mediaType, mediaId],
      }),
    onError: (err, _, context) =>
      queryClient.setQueryData(['mediaAction', mediaType, mediaId], context.prevData),
    onMutate: async (action) => {
      await queryClient.cancelQueries(['mediaAction', mediaType, mediaId]);
      const prevData = queryClient.getQueryData(['mediaAction', mediaType, mediaId]);

      queryClient.setQueryData(['mediaAction', mediaType, mediaId], (old) => ({
        ...old,
        ...action,
      }));

      return { prevData };
    },
  });
}
