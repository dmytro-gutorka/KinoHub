import { UserPaginatedListDTO } from '@kinohub/schemas';
import { useQuery } from '@tanstack/react-query';
import getPeople from '@shared/api/people/getPeople';

export default function usePeople(search: string, page: number) {
  const queryKey = ['people', page, search];

  return useQuery({
    queryKey,
    queryFn: (): Promise<UserPaginatedListDTO> => getPeople(search, page),
  });
}
