import { useQuery } from '@tanstack/react-query';
import getFriends from '@shared/api/friendship/getFriends';
import { UserPaginatedListDTO } from '@kinohub/schemas';

export default function useFriends(search: string, page: number) {
  const queryKey = ['friends', page, search];
  return useQuery({
    queryKey,
    queryFn: (): Promise<UserPaginatedListDTO> => getFriends(search, page),
  });
}
