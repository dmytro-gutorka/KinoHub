import { useQuery } from '@tanstack/react-query';
import getOutcomingFriendRequests from '@shared/api/friendship-requests/getOutcomingFriendRequests';
import { UserListItemDTO } from '@kinohub/schemas';

export default function useOutcomingFriendRequests(search: string = '', page: number = 1) {
  const queryKey = ['outcoming-friend-requests'];

  return useQuery({
    queryKey,
    queryFn: (): Promise<UserListItemDTO[]> => getOutcomingFriendRequests(search, page),
  });
}
