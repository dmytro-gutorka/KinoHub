import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useMovieBoardItemStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ watchStatus, mediaId }) => updateMovieBoardItemStatus(watchStatus, mediaId),
    onSettled: (_, variables) =>
      queryClient.invalidateQueries({
        queryKey: ['movieBoardMediaItems', variables.mediaId],
      }),
    onError: (_, variables, context) =>
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
