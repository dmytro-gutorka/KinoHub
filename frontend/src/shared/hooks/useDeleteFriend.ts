import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteFriend from '@shared/api/friendship/deleteFriend';

export default function useDeleteFriend() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (friendId: number) => deleteFriend(friendId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['people'] });
      await queryClient.invalidateQueries({ queryKey: ['friends'] });
    },
  });
}
