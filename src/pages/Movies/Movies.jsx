import { CircularProgress, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import CardsList from '../../shared/ui/CardsList';
import getMoviesByPage from '../../features/movies/api/getMoviesByPage';
import getMoviesByTitle from '../../features/movies/api/getMovieByTitle';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['movies', page],
    queryFn: () => getMoviesByPage(page),
  });

  const {
    data: searchData,
    isLoading: searchLoading,
    isSuccess: searchSuccess,
  } = useQuery({
    queryKey: ['movies', searchQuery],
    queryFn: () => getMoviesByTitle(page, searchQuery),
    enabled: searchQuery.length >= 4,
    staleTime: Infinity,
  });

  function handleSearch(e) {
    e.preventDefault();

    setSearchQuery(e.target.value);
  }

  const movies = searchData?.results.length > 0 ? searchData?.results : data?.results;

  if (searchSuccess) console.log(movies);

  return (
    <Stack component="section">
      <Stack>
        <input type="search" value={searchQuery} onChange={handleSearch} />
      </Stack>

      {searchLoading && <CircularProgress />}
      {movies && <CardsList movies={movies}></CardsList>}

      <button disabled={page === 1} onClick={() => setPage((page) => page - 1)}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={() => setPage((page) => page + 1)}>Next</button>
    </Stack>
  );
};

export default Movies;
