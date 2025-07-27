import { MEDIA_ACTIONS, WATCH_STATUS } from '@app/constants';

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

export type MediaAction = (typeof MEDIA_ACTIONS)[keyof typeof MEDIA_ACTIONS];
export type WatchStatus = (typeof WATCH_STATUS)[keyof typeof WATCH_STATUS];

export interface MediaDetails {
  mediaId: number;
  runtime: number;
  releaseDate: string;
  title: string;
  posterPath: string;
  voteAverage: number;
  mediaType: MediaType;
}
