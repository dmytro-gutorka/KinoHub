import { useState, useEffect } from 'react';

export const useMediaFilters = (initialFilters = {}) => {
  const [filters, setFilters] = useState({
    page: 1,
    minRating: 1,
    searchQuery: '',
    genres: [],
    sortBy: 'title.asc',
    isFiltersOpen: false,
    ...initialFilters,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;

    setFilters((prev) => ({ ...prev, searchQuery }));
  };

  const handleGenreChange = (e) => {
    const value = e.target.value;
    const genres = typeof value === 'string' ? value.split(',') : value;
    setFilters((prev) => ({ ...prev, genres }));
  };

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const handleRatingChange = (value) => {
    setFilters((prev) => ({ ...prev, minRating: value }));
  };

  const handlePageChange = (newPage) => {
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
