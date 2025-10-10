import { useQuery } from '@tanstack/react-query';
import getPeople from '@shared/api/people/getPeople';
import { UserListItemDTO } from '@kinohub/schemas';

export default function useFriends() {
  const queryKey = ['people'];

  return useQuery({
    queryKey,
    queryFn: (): Promise<UserListItemDTO[]> => getPeople(),
  });
}
