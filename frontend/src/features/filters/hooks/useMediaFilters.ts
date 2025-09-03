import { useState, useEffect, ChangeEvent } from 'react';
import { MediaFiltersBase, SortBy } from '@shared/types/generalTypes';
import { SelectChangeEvent } from '@mui/material';
import { TmdbGenre } from '@entities/types/tmdbEntities';

interface MediaFiltersWithSearch extends MediaFiltersBase {
  searchQuery: string;
}

interface MediaFiltersHandlers {
  handleGenreChange: (e: SelectChangeEvent<unknown>) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (e: React.ChangeEvent<{ value: SortBy }>) => void;
  handleRatingChange: (e: React.ChangeEvent<{ value: number }>) => void;
  handlePageChange: (_: unknown, newPage: number) => void
  handleResetFilters: () => void;
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
