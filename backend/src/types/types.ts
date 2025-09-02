import { Request } from 'express';
import { read } from 'node:fs';

export type MediaType = 'tv' | 'movie';

// export const WATCH_STATUSES =  {
//   ToWatch: 'toWatch',
//   IsWatching: 'isWatching',
//   OnHold: 'onHold',
//   Favorites: 'favorites',
//   Archived: 'archived',
// } as const

// export type WatchStatus = typeof WATCH_STATUSES[keyof typeof WATCH_STATUSES];

export enum WatchStatus {
  ToWatch = 'toWatch',
  IsWatching = 'isWatching',
  OnHold = 'onHold',
  Favorites = 'favorites',
  Archived = 'archived',
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

export type AuthedRequest<P = any, ResB = any, ReqB = any, Q = any> = Request<P, ResB, ReqB, Q> & {
  user: { id: number };
};


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


export type SettledUserMediaStats = readonly [
  PromiseSettledResult<AggregatedMediaStats>,
  PromiseSettledResult<TopRatedMedia[]>,
  PromiseSettledResult<TopRatedMedia[]>,
  PromiseSettledResult<FavoriteGenres[]>,
  PromiseSettledResult<TvShowInProgress[]>,
];