import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getActionForURL } from '../helpers/getActionForURL';
import updateMediaAction from '../api/updateMediaAction';

export default function useMediaAction(qrKey, mediaID) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (actionData) => updateMediaAction(mediaID, actionData, getActionForURL(actionData)),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [qrKey, mediaID],
      }),
    onError: (err, _, context) => queryClient.setQueryData([qrKey, mediaID], context.prevData),
    onMutate: async (actionData) => {
      await queryClient.cancelQueries([qrKey, mediaID]);
      const prevData = queryClient.getQueryData([qrKey, mediaID]);

      queryClient.setQueryData([qrKey, mediaID], (old) => ({ ...old, ...actionData }));

      return { prevData };
    },
  });
}
