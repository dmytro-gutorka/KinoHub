import { useQuery } from '@tanstack/react-query';
import getUpcomingMovies from '../api/getUpcomingMovies';

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ['upcomingMovies'],
    queryFn: getUpcomingMovies,
  });
};

export default useUpcomingMovies;
