import { useQuery } from '@tanstack/react-query';
import getTopRaterMovies from '../api/getTopRatedMovies';

const useTopRaterMovies = () => {
  return useQuery({
    queryKey: ['topRaterMovies'],
    queryFn: getTopRaterMovies,
  });
};

export default useTopRaterMovies;
