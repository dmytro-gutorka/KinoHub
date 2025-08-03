import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateUserMediaAction from '@shared/api/kinohub/services/userMediaActions/updateUserMediaAction';

interface UpdateMovieBoardItemArgs {
  mediaId: number;
  mediaType: MediaType;
  action: Partial<MediaUserActions>;
}

export default function useUpdateMovieBoardItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (args: UpdateMovieBoardItemArgs) => {
      const { mediaId, mediaType, action } = args;
      return updateUserMediaAction(mediaId, mediaType, action);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['movieBoardItem'] }),
    // onError: (error, _, context) => {
    //   console.log('contest', context);
    //   return queryClient.setQueryData(['movieBoardItem'], context?.prevData);
    // },
    // onMutate: async (args: UpdateMovieBoardItemArgs) => {
    //   await queryClient.cancelQueries({ queryKey: ['movieBoardItem'] });
    //   const prevData = queryClient.getQueryData<MediaUserActions>(['movieBoardItem']);
    //
    //   queryClient.setQueryData(['movieBoardItem'], (old: MediaUserActions) => {
    //     console.log('old', old);
    //     return {
    //       ...old,
    //       ...args?.action,
    //     };
    //   });
    //
    //   return { prevData };
    // },
  });
}
