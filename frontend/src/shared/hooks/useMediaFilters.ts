import { useState, useEffect, ChangeEvent } from 'react';
import { Genres, SortBy } from '@shared/types/generalTypes';
import { SelectChangeEvent } from '@mui/material';

interface MediaFilters {
  page: number;
  minRating: number;
  searchQuery: string;
  genres: Genres[];
  sortBy: SortBy;
  isFiltersOpen: boolean;
}

export const useMediaFilters = (initialFilters = {}) => {
  const [filters, setFilters] = useState<MediaFilters>({
    page: 1,
    minRating: 1,
    searchQuery: '',
    genres: [],
    sortBy: SortBy.YearDESC,
    isFiltersOpen: false,
    ...initialFilters,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchQuery: string = e.target.value;
    setFilters((prev) => ({ ...prev, searchQuery }));
  };

  const handleGenreChange = (event: SelectChangeEvent<unknown>) => {
    const genres = event.target.value as Genres[];

    setFilters((prev) => ({ ...prev, genres }));
  };

  const handleSortChange = (e: ChangeEvent<{ value: SortBy }>) => {
    const sortBy: SortBy = e.target.value;
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const handleRatingChange = (value: number) => {
    setFilters((prev) => ({ ...prev, minRating: value }));
  };

  const handlePageChange = (_: unknown, newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  useEffect(() => setFilters((prev) => ({ ...prev, page: 1 })), [filters.searchQuery]);

  return {
    filters,
    handlers: {
      handleGenreChange,
      handleSearch,
      handleSortChange,
      handleRatingChange,
      handlePageChange,
    },
  };
};
