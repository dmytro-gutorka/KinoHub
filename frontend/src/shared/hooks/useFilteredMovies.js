import { useQuery } from '@tanstack/react-query';
import getMoviesByPage from '../../features/movies/api/getMoviesByPage';

const useFilteredMovies = (mainKey, page, minRating, genres, sortBy) => {
  return useQuery({
    queryFn: () => getMoviesByPage(page, minRating, genres, sortBy),
    queryKey: [mainKey, page, minRating, genres, sortBy],
    staleTime: Infinity,
  });
};

export default useFilteredMovies;
