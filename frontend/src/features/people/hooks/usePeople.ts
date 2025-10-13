import { UserListItemDTO } from '@kinohub/schemas';
import { useQuery } from '@tanstack/react-query';
import getPeople from '@shared/api/people/getPeople';

export default function usePeople() {
  const queryKey = ['people'];

  return useQuery({
    queryKey,
    queryFn: (): Promise<UserListItemDTO[]> => getPeople(),
  });
}
