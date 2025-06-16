import { useQuery } from '@tanstack/react-query';
import getTopRatedMovies from '../api/getTopRatedMovies';

const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: getTopRatedMovies,
    staleTime: Infinity,
  });
};

export default useTopRatedMovies;
