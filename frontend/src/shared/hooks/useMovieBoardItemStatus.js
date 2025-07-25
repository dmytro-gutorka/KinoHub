import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateMovieBoardItemStatus from '../api/kinohub/updateMovieBoardItemStatus';

export default function useMovieBoardItemStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ watchStatus, mediaId }) => updateMovieBoardItemStatus(watchStatus, mediaId),
    onSettled: (_, variables) =>
      queryClient.invalidateQueries({
        queryKey: ['movieBoardMediaItems', variables.mediaId],
      }),
    onError: (err, variables, context) =>
      queryClient.setQueryData(['movieBoardMediaItems', variables.mediaId], context.prevData),
    onMutate: async (variables) => {
      await queryClient.cancelQueries(['movieBoardMediaItems', variables.mediaId]);
      const prevData = queryClient.getQueryData(['movieBoardMediaItems', variables.mediaId]);

      queryClient.setQueryData(['movieBoardMediaItems', variables.mediaId], (old) => ({
        ...old,
        ...variables,
      }));

      return { prevData };
    },
  });
}
