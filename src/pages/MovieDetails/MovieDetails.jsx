import { useParams, useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import getPopularMovies from '../../features/movies/api/getPopularMovies';
import getMovieDetails from '../../features/movies/api/getMovieDetails';

const MovieDetails = () => {
  const [query, _] = useSearchParams();
  const { id } = useParams();

  const queryKey = query.get('from');

  const { data: movies } = useQuery({
    queryKey: [queryKey],
    queryFn: getPopularMovies,
    staleTime: Infinity,
  });

  const movie = movies?.results.find((m) => m.id === +id);

  const { data, isSuccess } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => getMovieDetails(id),
    staleTime: Infinity,
    enabled: !movie,
  });

  if (isSuccess) console.log(data);

  return <div></div>;
};

export default MovieDetails;
