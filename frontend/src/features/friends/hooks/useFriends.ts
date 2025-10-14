import { useQuery } from '@tanstack/react-query';
import getFriends from '@shared/api/friendship/getFriends';

export default function useFriends(search: string, page: number) {
  const queryKey = ['friends', page, search];
  return useQuery({
    queryKey,
    queryFn: () => getFriends(search, page),
  });
}
