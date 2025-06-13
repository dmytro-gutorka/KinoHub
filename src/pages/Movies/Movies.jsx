import { Stack } from '@mui/material';
import CardsList from '../../shared/ui/CardsList';
import { useQuery } from '@tanstack/react-query';
import getMoviesByPage from '../../features/movies/api/getMoviesByPage';
import { useState } from 'react';

const Movies = () => {
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['movies', page],
    queryFn: () => getMoviesByPage(page),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  if (isSuccess) console.log(data);

  return (
    <Stack component="section">
      {/*// Form*/}
      MOVIES PAGE
      <CardsList movies={data.results}></CardsList>
      <button disabled={page === 1} onClick={() => setPage((page) => page - 1)}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={() => setPage((page) => page + 1)}>Next</button>
    </Stack>
  );
};

export default Movies;
