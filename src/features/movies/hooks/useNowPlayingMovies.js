import { useQuery } from '@tanstack/react-query';
import getNowPlayingMovies from '../api/getNowPlayingMovies';

const useNowPlayingMovies = () => {
  return useQuery({
    queryKey: ['nowPlayingMovies'],
    queryFn: getNowPlayingMovies,
  });
};

export default useNowPlayingMovies;
