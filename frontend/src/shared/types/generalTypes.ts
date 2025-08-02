import { MEDIA_ACTIONS, WATCH_STATUS } from '@app/constants';
import { TmdbGenreList } from '@shared/types/tmdbEntities';
import { UserMediaActionEntity } from '@shared/types/kinohubEntities';

export type MediaType = 'movie' | 'tv';

export enum SortBy {
  TitleASC = 'title.asc',
  TitleDESC = 'title.desc',
  RatingASC = 'vote_average.asc',
  RatingDESC = 'vote_average.desc',
  YearASC = 'primary_release_date.asc',
  YearDESC = 'primary_release_date.desc',
}

export interface MediaFiltersBase {
  page: number;
  minRating: number;
  sortBy: SortBy;
  genres: TmdbGenreList[];
}

export interface SearchedMediaParams {
  page: number;
  searchQuery: string;
  mediaType: MediaType;
}

export type MediaActionType = (typeof MEDIA_ACTIONS)[keyof typeof MEDIA_ACTIONS];
export type WatchStatus = (typeof WATCH_STATUS)[keyof typeof WATCH_STATUS];

export type MediaUserActions = {
  [key in MediaActionType]: UserMediaActionEntity[key];
};
