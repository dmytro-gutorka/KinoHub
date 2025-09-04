import { useState, useEffect, ChangeEvent } from 'react';
import { MediaFiltersBase, MediaFiltersHandlers, SortBy } from '@shared/types/generalTypes';
import { SelectChangeEvent } from '@mui/material';
import { TmdbGenre } from '@entities/types/tmdbEntities';

interface MediaFiltersWithSearch extends MediaFiltersBase {
  searchQuery: string;
}

const initialFilters: MediaFiltersWithSearch = {
  searchQuery: '',
  minRating: '',
  sortBy: '',
  genres: [],
  page: 1,
};

export const useMediaFilters = (): {
  filters: MediaFiltersWithSearch;
  handlers: MediaFiltersHandlers
} => {
  const [filters, setFilters] = useState<MediaFiltersWithSearch>(initialFilters);

  const handleSearch = (e: ChangeEvent<{value: string}>) => {
    const searchQuery: string = e.target.value;
    setFilters((prev) => ({ ...prev, searchQuery }));
  };

  const handleSortChange = (e: ChangeEvent<{ value: SortBy }>) => {
    const sortBy: SortBy = e.target.value;
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const handleRatingChange = (e: ChangeEvent<{value: number}>) => {
    const minRating: number = e.target.value
    setFilters((prev) => ({ ...prev, minRating}));
  };

  const handleGenreChange = (e: SelectChangeEvent<unknown>) => {
    const genres = e.target.value as Array<TmdbGenre>;
    setFilters((prev) => ({ ...prev, genres }));
  };

  const handlePageChange = (_: unknown, newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  const handleResetFilters = () => setFilters(initialFilters)

  useEffect(() => setFilters((prev) => ({ ...prev, page: 1 })), [filters.searchQuery]);

  return {
    filters,
    handlers: {
      handleResetFilters,
      handleGenreChange,
      handleSearch,
      handleSortChange,
      handleRatingChange,
      handlePageChange,
    },
  };
};
