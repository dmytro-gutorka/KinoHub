import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getActionForURL } from '../../../shared/helpers/getActionForURL';
import updateMediaAction from '../api/updateMediaAction';


export default function useLikeAction(mediaID) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ( actionData ) =>
      updateMediaAction(mediaID, actionData, getActionForURL(actionData)),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['actionData', mediaID],
      }),
    onError: (err,_ , context) =>
      queryClient.setQueryData(['actionData', mediaID], context.prevData),
    onMutate: async ( actionData ) => {
      const queryKey = ['actionData', mediaID]
      await queryClient.cancelQueries(queryKey)
      const prevData = queryClient.getQueryData(queryKey)

      queryClient.setQueryData(queryKey, old => ({ ...old, ...actionData }))

      return { prevData }
    }}
  )
}

