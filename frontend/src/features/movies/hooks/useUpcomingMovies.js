import { useQuery } from '@tanstack/react-query';
import getUpcomingMovies from '../api/getUpcomingMovies';
import { QUERY_KEYS } from '../../../app/constants';

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.movies.upcomingMovies],
    queryFn: getUpcomingMovies,
  });
};

export default useUpcomingMovies;
