import { Request } from 'express';

export type MediaType = 'tv' | 'movie';

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

export interface UserStatsCard {
  number_of_ratings: number;
  avg_rating: number | null;
  max_rating: number | null;
  min_rating: number | null;
  runtime_movie: number;
  runtime_tv: number;
  watched_movie: number;
  watched_tv: number;
  comment_count: number;
  episodes_watched: number;
}
