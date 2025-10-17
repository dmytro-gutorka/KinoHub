import { MediaUserAction } from '../entity/MediaUserAction.js';
import { MEDIA_ACTIONS } from '../utils/constants/SHARED.js';

export type MediaType = 'tv' | 'movie';
export type ActivityType = 'watch' | 'like' | 'rate' | 'comment'; // dislike ?

export type MediaActionTypes = (typeof MEDIA_ACTIONS)[keyof typeof MEDIA_ACTIONS];

export type MediaUserActions = {
  [key in MediaActionTypes]: MediaUserAction[key];
};

export interface Action {
  type: MediaActionTypes;
  payload: MediaUserActions[MediaActionTypes];
}

export enum WatchStatus {
  ToWatch = 'toWatch',
  IsWatching = 'isWatching',
  OnHold = 'onHold',
  Favorites = 'favorites',
  Archived = 'archived',
}

export interface WatchedEpisodesPerSeason {
  season: number;
  watchedEpisodes: number;
}

export interface UserAction {
  isLiked: boolean;
  isWatched: boolean;
  rating: number | null;
  watchStatus: WatchStatus | null;
}

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  tokens: JwtTokens;
  data: { email: string; username: string };
}

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface RefreshResponse {
  data: User;
  tokens: JwtTokens;
}

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
  overallRuntime: number;
  watchedMedia: number;
  watchedEpisodes: number;
  commentsCount: number;
}

export type SettledUserMediaStats = readonly [
  PromiseSettledResult<AggregatedMediaStats>,
  PromiseSettledResult<TopRatedMedia[]>,
  PromiseSettledResult<FavoriteGenres[]>,
  PromiseSettledResult<TvShowInProgress[]>,
];

export interface DateRange {
  from?: Date;
  to?: Date;
}

export type DateRangePresets = 'all' | 'week' | 'month' | 'year';
