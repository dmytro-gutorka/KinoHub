export type MediaType = 'movie' | 'tv';

export enum SortBy {
  TitleASC = 'title.asc',
  TitleDESC = 'title.desc',
  RatingASC = 'vote_average.asc',
  RatingDESC = 'vote_average.desc',
  YearASC = 'primary_release_date.asc',
  YearDESC = 'primary_release_date.desc',
}

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

export interface SearchedMediaParams {
  page: number;
  searchQuery: string;
  mediaType: MediaType;
}
