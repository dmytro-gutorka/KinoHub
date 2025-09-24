import { MEDIA_ACTIONS, WATCH_STATUS } from '@app/constants';
import { TmdbEpisodeInfo, TmdbGenre, TmdbSeasonInfo } from '@entities/types/tmdbEntities';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';
import { SelectChangeEvent } from '@mui/material';

export type MediaType = 'movie' | 'tv';

export enum SortBy {
  TitleASC = 'title.asc',
  TitleDESC = 'title.desc',
  NameASC = 'name.asc',
  NameDESC = 'name.desc',
  FirstAirDateASC = 'first_air_date.asc',
  FirstAirDateDESC = 'first_air_date.desc',
  RatingASC = 'vote_average.asc',
  RatingDESC = 'vote_average.desc',
  YearASC = 'primary_release_date.asc',
  YearDESC = 'primary_release_date.desc',
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

export type WatchStatus = (typeof WATCH_STATUS)[keyof typeof WATCH_STATUS];
export type MediaActionTypes = (typeof MEDIA_ACTIONS)[keyof typeof MEDIA_ACTIONS];

export type MediaUserActions = {
  [key in MediaActionTypes]: UserMediaActionEntity[key];
};

export interface Action {
  type: MediaActionTypes;
  payload: MediaUserActions[MediaActionTypes];
}

export interface WatchedEpisodesPerSeason {
  season: number;
  watchedEpisodes: number;
}

export type SeasonDataWithEpisodes = TmdbSeasonInfo & { episodes: Array<TmdbEpisodeInfo> };

export interface TopRatedMedia {
  rating: number;
  title: string;
  posterPath: string | null;
  releaseDate: string;
}

export interface TvShowInProgress {
  tvShowId: number;
  totalWatchedEpisodes: number;
  totalEpisodes: number;
  totalSeasons: number;
  title: string;
  releaseDate: string;
  voteAverage: number;
  status: string;
  posterPath: string | null;
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
  tvShowInProgress: TvShowInProgress[];
}

export interface MediaFiltersHandlers {
  handleGenreChange: (e: SelectChangeEvent<unknown>) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (e: React.ChangeEvent<{ value: SortBy }>) => void;
  handleRatingChange: (e: React.ChangeEvent<{ value: number }>) => void;
  handlePageChange: (_: unknown, newPage: number) => void;
  handleResetFilters: () => void;
}

export interface SVGIcon {
  width?: number;
  height?: number;
  color?: string;
}
