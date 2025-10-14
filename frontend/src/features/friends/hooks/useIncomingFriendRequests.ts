import { useQuery } from '@tanstack/react-query';
import getIncomingFriendRequests from '@shared/api/friendship-requests/getIncomingFriendRequests';
import { UserListItemDTO } from '@kinohub/schemas';

export default function useIncomingFriendRequests(search: string = '', page: number = 1) {
  const queryKey = ['incoming-friend-requests'];

  return useQuery({
    queryKey,
    queryFn: (): Promise<UserListItemDTO[]> => getIncomingFriendRequests(search, page),
  });
}
