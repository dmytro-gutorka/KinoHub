import { useQuery } from '@tanstack/react-query';
import getFriends from '@shared/api/friendship/getFriends';

export default function useFriends(search: string) {
  const queryKey = ['friends', search];
  return useQuery({
    queryKey,
    queryFn: () => getFriends(search),
  });
}
