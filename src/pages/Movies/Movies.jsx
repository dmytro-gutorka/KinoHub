import {
  CircularProgress,
  MenuItem,
  OutlinedInput,
  FormControl,
  InputLabel,
  Box,
  Chip,
  Select,
  Stack,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import CardsList from '../../shared/ui/CardsList';
import getMoviesByPage from '../../features/movies/api/getMoviesByPage';
import getMoviesByTitle from '../../features/movies/api/getMovieByTitle';
import movieGenres from '../../features/movies/data/movieGenres';

const Movies = () => {
  const [openFilters, setoOpenFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [genres, setGenres] = useState([]);
  const [sortBy, setSortBy] = useState('title');

  const handleGenre = (e) => {
    const value = e.target.value;
    setGenres(typeof value === 'string' ? value.split(',') : value);
  };

  console.log(genres);
  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    if (searchQuery.length >= 4) setPage(1);
  }, [searchQuery]);

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

  const maxPage = searchData?.total_pages || data?.total_pages;
  const movies = searchData?.results.length > 0 ? searchData?.results : data?.results;

  if (searchSuccess) console.log(searchData);

  return (
    <Stack component="section">
      <Stack>
        <input type="search" value={searchQuery} onChange={handleSearch} />

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="movie-genres-filter">Genres</InputLabel>
          <Select
            multiple
            labelId="movie-genres-filter"
            variant="standard"
            value={genres}
            onChange={handleGenre}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {movieGenres.map(({ name, id }) => (
              <MenuItem key={id} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="movie-genres-filter">Age</InputLabel>
            <Select labelId="movie-genres-filter" label="Age" variant="filled">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      {searchLoading && <CircularProgress />}
      {movies && <CardsList movies={movies}></CardsList>}

      <button disabled={page === 1} onClick={() => setPage((page) => page - 1)}>
        Prev
      </button>
      <span>{page}</span>
      <button disabled={page === maxPage} onClick={() => setPage((page) => page + 1)}>
        Next
      </button>
    </Stack>
  );
};

export default Movies;
