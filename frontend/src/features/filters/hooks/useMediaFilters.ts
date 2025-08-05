import { useState, useEffect, ChangeEvent } from 'react';
import { MediaFiltersBase, SortBy } from '@shared/types/generalTypes';
import { SelectChangeEvent } from '@mui/material';
import { TmdbGenre } from '@entities/types/tmdbEntities';

interface MediaFiltersWithSearch extends MediaFiltersBase {
  searchQuery: string;
}

interface MediaFiltersHandlers {
  handleGenreChange: (e: SelectChangeEvent<unknown>) => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (e: ChangeEvent<{ value: SortBy }>) => void;
  handleRatingChange: (value: number) => void;
  handlePageChange: (e: unknown, newPage: number) => void;
}

export const useMediaFilters = (initialFilters = {}) => {
  const [filters, setFilters] = useState<MediaFiltersWithSearch>({
    page: 1,
    minRating: 1,
    searchQuery: '',
    genres: [],
    sortBy: SortBy.YearDESC,
    ...initialFilters,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchQuery: string = e.target.value;
    setFilters((prev) => ({ ...prev, searchQuery }));
  };

  const handleGenreChange = (e: SelectChangeEvent<unknown>) => {
    const genres = e.target.value as Array<TmdbGenre>;

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
