import { useQuery } from '@tanstack/react-query';
import getTopRatedMovies from '../api/getTopRatedMovies';

const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: getTopRatedMovies,
  });
};

export default useTopRatedMovies;
