import { useQuery } from '@tanstack/react-query';
import getIncomingFriendRequests from '@shared/api/friendship-requests/getIncomingFriendRequests';
import { UserPaginatedListDTO } from '@kinohub/schemas';

export default function useIncomingFriendRequests(search: string, page: number) {
  const queryKey = ['incoming-friend-requests', page, search];

  return useQuery({
    queryKey,
    queryFn: (): Promise<UserPaginatedListDTO> => getIncomingFriendRequests(search, page),
  });
}
