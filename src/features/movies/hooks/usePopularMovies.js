import { useQuery } from '@tanstack/react-query';
import getPopularMovies from '../api/getPopularMovies';

const usePopularMovies = () => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: getPopularMovies,
  });
};

export default usePopularMovies;
