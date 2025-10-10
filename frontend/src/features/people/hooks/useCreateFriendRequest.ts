import { useMutation, useQueryClient } from '@tanstack/react-query';
import createFriendRequest from '@shared/api/friendship-requests/createFriendRequest';

export default function useCreateFriendRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (friendId: number) => createFriendRequest(friendId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['people'] });
    },
  });
}
