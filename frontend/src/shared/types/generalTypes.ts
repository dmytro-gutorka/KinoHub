import { MEDIA_ACTIONS, WATCH_STATUS } from '@app/constants';
import { TmdbGenre } from '@entities/types/tmdbEntities';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';

export type MediaType = 'movie' | 'tv';

export enum SortBy {
  TitleASC = 'title.asc',
  TitleDESC = 'title.desc',
  // FOR TV UTS name.acs
  // title.asc is only for movies !!!!!!!!!
  RatingASC = 'vote_average.asc',
  RatingDESC = 'vote_average.desc',
  YearASC = 'primary_release_date.asc',
  YearDESC = 'primary_release_date.desc',
}

export interface MediaFiltersBase {
  page: number;
  minRating: number;
  sortBy: SortBy;
  genres: TmdbGenre[];
}

export interface SearchMediaParams {
  page: number;
  searchQuery: string;
  mediaType: MediaType;
}

export type MediaActionType = (typeof MEDIA_ACTIONS)[keyof typeof MEDIA_ACTIONS];
export type WatchStatus = (typeof WATCH_STATUS)[keyof typeof WATCH_STATUS];

export type MediaUserActions = {
  [key in MediaActionType]: UserMediaActionEntity[key];
};
