import { UserPaginatedListDTO } from '@kinohub/schemas';
import { useQuery } from '@tanstack/react-query';
import getOutcomingFriendRequests from '@shared/api/friendship-requests/getOutcomingFriendRequests';

export default function useOutcomingFriendRequests(search: string, page: number) {
  const queryKey = ['outcoming-friend-requests', page, search];

  return useQuery({
    queryKey,
    queryFn: (): Promise<UserPaginatedListDTO> => getOutcomingFriendRequests(search, page),
  });
}
