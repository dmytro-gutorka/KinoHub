import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Stack } from '@mui/material';

import getMovieDetails from '../../features/movies/api/getMovieDetails';
import MovieContent from '../../features/movies/components/MovieContent';
import MediaDetailsPage from '../../shared/ui/MediaDetailsPage';

const MovieDetails = () => {
  // const { id } = useParams();
  //
  // const {
  //   data: movie,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ['movie', +id],
  //   queryFn: () => getMovieDetails(id),
  //   staleTime: Infinity,
  // });
  //
  // if (isLoading) return <div>Loading...</div>;
  //
  // if (isError) return <div>Error fetching a movie</div>;

  return (
    <MediaDetailsPage />
    // <Stack>
    //   <MovieContent movie={movie}></MovieContent>
    // </Stack>
  );
};

export default MovieDetails;
