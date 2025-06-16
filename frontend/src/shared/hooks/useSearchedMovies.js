import { useQuery } from '@tanstack/react-query';
import getMoviesByTitle from '../../features/movies/api/getMovieByTitle';

const useSearchedMovies = (mainKey, page, searchQuery) => {
  return useQuery({
    queryFn: () => getMoviesByTitle(page, searchQuery),
    queryKey: [mainKey, page, searchQuery],
    enabled: searchQuery.length >= 2,
    staleTime: Infinity,
  });
};

export default useSearchedMovies;
