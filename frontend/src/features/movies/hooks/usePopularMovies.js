import { useQuery } from '@tanstack/react-query';
import getPopularMovies from '../api/getPopularMovies';
import { QUERY_KEYS } from '../../../app/constants';

const usePopularMovies = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.movies.popularMovies],
    queryFn: getPopularMovies,
  });
};

export default usePopularMovies;
