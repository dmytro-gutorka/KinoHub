import { CircularProgress, Stack } from '@mui/material';
import { useMediaFilters } from '../../shared/hooks/useMediaFilters';

import CardsList from '../../shared/ui/CardsList';
import BasicSelect from '../../shared/ui/BasicSelect';
import MultipleSelect from '../../shared/ui/MultipleSelect';
import SliderBar from '../../shared/ui/SliderBar';
import useFilteredMovies from '../../shared/hooks/useFilteredMovies';
import useSearchedMovies from '../../shared/hooks/useSearchedMovies';

const Movies = () => {
  const {
    filters: { page, minRating, searchQuery, genres, sortBy, isFiltersOpen },
    handlers: {
      handleGenreChange,
      handleSearch,
      handleSortChange,
      handleRatingChange,
      handlePageChange,
    },
  } = useMediaFilters();

  const { data } = useFilteredMovies('movies', page, minRating, genres, sortBy);
  const { data: searchData, isLoading: searchLoading } = useSearchedMovies(
    'movies',
    page,
    searchQuery
  );

  const maxPage = searchData?.total_pages || data?.total_pages;
  const movies = searchData?.results.length > 0 ? searchData?.results : data?.results;

  return (
    <Stack component="section">
      <input type="search" value={searchQuery} onChange={handleSearch} />

      {searchQuery || (
        <Stack>
          <MultipleSelect genres={genres} onGenresChange={handleGenreChange} />
          <BasicSelect sortBy={sortBy} onSortChange={handleSortChange} />
          <SliderBar minRating={minRating} onRatingChange={handleRatingChange} />
        </Stack>
      )}

      {searchLoading && <CircularProgress />}
      {movies && <CardsList movies={movies}></CardsList>}

      <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        Prev
      </button>
      <span>{page}</span>
      <button disabled={page === maxPage} onClick={() => handlePageChange(page + 1)}>
        Next
      </button>
    </Stack>
  );
};

export default Movies;
