import { useQuery } from '@tanstack/react-query';
import getMovieBoardItems from '@shared/api/kinohub/services/movieBoardItem/getMovieBoardItems';

export default function useMovieBoardItems() {
  return useQuery({
    queryKey: ['movieBoardItem'],
    queryFn: getMovieBoardItems,
    staleTime: 0,
  });
}
