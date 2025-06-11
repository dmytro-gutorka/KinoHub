import { useQuery } from '@tanstack/react-query';
import getNowPlayingMovies from '../api/getNowPlayingMovies';
import { QUERY_KEYS } from '../../../config/constants';

const useNowPlayingMovies = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.movies.nowPlayingMovies],
    queryFn: getNowPlayingMovies,
  });
};

export default useNowPlayingMovies;
