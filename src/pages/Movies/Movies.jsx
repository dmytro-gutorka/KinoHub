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
  Slider,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import CardsList from '../../shared/ui/CardsList';
import getMoviesByPage from '../../features/movies/api/getMoviesByPage';
import getMoviesByTitle from '../../features/movies/api/getMovieByTitle';
import movieGenres from '../../features/movies/data/movieGenres';

const Movies = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [genres, setGenres] = useState([]);
  const [sortBy, setSortBy] = useState('title.asc');

  const handleGenre = (e) => {
    const value = e.target.value;
    setGenres(typeof value === 'string' ? value.split(',') : value);
  };

  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    if (searchQuery.length >= 4) setPage(1);
  }, [searchQuery]);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryFn: () => getMoviesByPage(page, minRating, genres, sortBy),
    queryKey: ['movies', page, minRating, genres, sortBy],
    staleTime: Infinity,
  });

  const {
    data: searchData,
    isLoading: searchLoading,
    isSuccess: searchSuccess,
  } = useQuery({
    queryFn: () => getMoviesByTitle(page, searchQuery),
    queryKey: ['movies', page, searchQuery],
    enabled: searchQuery.length >= 2,
    staleTime: Infinity,
  });

  const maxPage = searchData?.total_pages || data?.total_pages;
  const movies = searchData?.results.length > 0 ? searchData?.results : data?.results;

  console.log(movies);

  return (
    <Stack component="section">
      <Stack>
        <input type="search" value={searchQuery} onChange={handleSearch} />

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="movie-genres-filter">Genres</InputLabel>
          <Select
            multiple
            labelId="movie-genres-filter"
            value={genres}
            variant="standard"
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
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="movie-sort-by">Sort by</InputLabel>
          <Select
            labelId="movie-sort-by"
            value={sortBy}
            variant="standard"
            onChange={(e) => setSortBy(e.target.value)}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          >
            <MenuItem value="title.asc">Title</MenuItem>
            <MenuItem value="vote_average.asc">Rating</MenuItem>
            <MenuItem value="primary_release_date.asc">Year</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ width: 250 }}>
          <Typography>Average rating</Typography>
          <Slider
            step={0.5}
            value={minRating}
            valueLabelDisplay="auto"
            min={0}
            max={10}
            onChange={(e) => setMinRating(e.target.value)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" onClick={() => setMinRating(0)} sx={{ cursor: 'pointer' }}>
              0 min
            </Typography>
            <Typography variant="body2" onClick={() => setMinRating(10)} sx={{ cursor: 'pointer' }}>
              10 max
            </Typography>
          </Box>
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
