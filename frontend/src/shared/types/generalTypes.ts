import { MEDIA_ACTIONS, WATCH_STATUS } from '@app/constants';
import { TmdbEpisodeInfo, TmdbGenre, TmdbSeasonInfo } from '@entities/types/tmdbEntities';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';
import { ReactNode } from 'react';
import { TypographyVariant } from '@mui/material';

export type MediaType = 'movie' | 'tv';

export enum SortBy {
  // TitleASC = 'title.asc',
  // TitleDESC = 'title.desc',
  RatingASC = 'vote_average.asc',
  RatingDESC = 'vote_average.desc',
  YearASC = 'primary_release_date.asc',
  YearDESC = 'primary_release_date.desc',

  // FOR TV UTS name.acs
  // title.asc is only for movies !!!!!!!!!
}


export interface MediaFiltersBase {
  page: number;
  minRating: number | '';
  sortBy: SortBy | '';
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

export type SeasonDataWithEpisodes = TmdbSeasonInfo & { episodes: Array<TmdbEpisodeInfo> };


export interface TopRatedMedia {
  rating: number;
  title: string,
  posterPath: string | null,
  releaseDate: string,
}

export interface TvShowInProgress {
  tvShowId: number,
  totalWatchedEpisodes: number,
  totalEpisodes: number,
  totalSeasons: number,
  title: string,
  releaseDate: string,
  voteAverage: number,
  status: string,
  posterPath: string | null,
}

export interface FavoriteGenres {
  name: string;
  count: number;
}

export interface AggregatedMediaStats {
  avgRating: number | null;
  maxRating: number | null;
  minRating: number | null;
  ratingCount: number;
  runtimeMovie: number;
  runtimeTv: number;
  watchedMovie: number;
  watchedTv: number;
  watchedEpisodes: number;
  commentsCount: number;
}

export interface UserMediaStats {
  userMediaAggregatedStats: AggregatedMediaStats;
  favoriteGenres: FavoriteGenres[];
  topRatedMovie: TopRatedMedia[];
  topRatedTv: TopRatedMedia[];
  tvShowInProgress: TvShowInProgress[]
}


export interface BlockWrapperProps {
  blockTitle?: string;
  children: ReactNode;
  titleFontWeight?: number;
  titleSizeVariant?: TypographyVariant;
}