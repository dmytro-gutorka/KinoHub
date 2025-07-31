import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import updateMediaAction from '@shared/api/kinohub/services/actions/updateMediaAction';

export default function useMediaAction(mediaId: number, mediaType: MediaType) {
  const queryClient = useQueryClient();

  return useMutation<MediaUserActions, Error, Partial<MediaUserActions>, { prevData: any }>({
    mutationFn: (action: Partial<MediaUserActions>) =>
      updateMediaAction(mediaId, mediaType, action),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['mediaAction', mediaType, mediaId],
      }),
    onError: (err, _, context) =>
      queryClient.setQueryData(['mediaAction', mediaType, mediaId], context?.prevData),
    onMutate: async (action: Partial<MediaUserActions>) => {
      await queryClient.cancelQueries({ queryKey: ['mediaAction', mediaType, mediaId] });
      const prevData = queryClient.getQueryData<MediaUserActions>([
        'mediaAction',
        mediaType,
        mediaId,
      ]);

      queryClient.setQueryData(['mediaAction', mediaType, mediaId], (old: MediaUserActions) => ({
        ...old,
        ...action,
      }));

      return { prevData };
    },
  });
}
//TODO: Read in doc more about optimistic updates
