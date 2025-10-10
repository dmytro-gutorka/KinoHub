import { useMutation, useQueryClient } from '@tanstack/react-query';
import rejectFriendRequest from '@shared/api/friendship-requests/rejectFriendRequest';

export default function useRejectFriendRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (friendRequestId: number) => rejectFriendRequest(friendRequestId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['people'] });
    },
  });
}
