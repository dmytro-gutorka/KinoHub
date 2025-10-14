import { useMutation, useQueryClient } from '@tanstack/react-query';
import cancelFriendRequest from '@shared/api/friendship-requests/cancelFriendRequest';

export default function useCancelFriendRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (friendRequestId: number) => cancelFriendRequest(friendRequestId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['people'] });
      await queryClient.invalidateQueries({ queryKey: ['outcoming-friend-requests'] });
    },
  });
}
