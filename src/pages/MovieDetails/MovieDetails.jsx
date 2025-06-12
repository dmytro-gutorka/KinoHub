import { useParams, useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Box, Stack } from '@mui/material';

import getPopularMovies from '../../features/movies/api/getPopularMovies';
import getMovieDetails from '../../features/movies/api/getMovieDetails';
import MovieContent from '../../features/movies/components/MovieContent';

const MovieDetails = () => {
  // const [query, _] = useSearchParams();
  const { id } = useParams();
  //
  // const queryKey = query.get('from');
  //
  // const { data: results } = useQuery({
  //   queryKey: [queryKey],
  //   queryFn: getPopularMovies,
  //   staleTime: Infinity,
  // });
  //
  // const movieFromCache = results?.results.find((m) => m.id === +id);

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id),
    staleTime: Infinity,
    // enabled: !movieFromCache,
  });

  // const movie = movieFromCache ?? movieFromServer;

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching a movie</div>;

  console.log(1, movie);

  return (
    <Stack>
      <MovieContent movie={movie}></MovieContent>
    </Stack>
  );
};

export default MovieDetails;
