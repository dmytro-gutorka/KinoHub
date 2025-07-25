import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

export type MediaType = 'movie' | 'tv';

export enum SortBy {
  TitleASC = 'title.asc',
  TitleDESC = 'title.desc',
  RatingASC = 'vote_average.asc',
  RatingDESC = 'vote_average.desc',
  YearASC = 'primary_release_date.asc',
  YearDESC = 'primary_release_date.desc',
}

export type ChangeEventUnknownValue = ChangeEvent<{ value: unknown }>;

export interface Genres {
  id: number;
  name: string;
}

export interface MediaFiltersBase {
  page: number;
  minRating: number;
  genres: Genres[];
  sortBy: SortBy;
}

interface MediaFiltersHandlers {
  handleGenreChange: (event: SelectChangeEvent<unknown>) => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (e: ChangeEvent<{ value: SortBy }>) => void;
  handleRatingChange: (value: number) => void;
  handlePageChange: (e: unknown, newPage: number) => void;
}

export interface SearchedMediaParams {
  page: number;
  searchQuery: string;
  mediaType: MediaType;
}
