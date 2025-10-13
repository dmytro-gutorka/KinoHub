import { useMutation, useQueryClient } from '@tanstack/react-query';
import acceptFriendRequest from '@shared/api/friendship-requests/acceptFriendRequest';

export default function useAcceptFriendRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (friendRequestId: number) => acceptFriendRequest(friendRequestId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['people'] });
    },
  });
}
