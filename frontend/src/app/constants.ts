export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w780';
export const TMDB_URL = 'https://api.themoviedb.org/3';
export const CLIENT_URL = 'http://localhost:3000';
export const API_URL = 'http://localhost:8080/api/v1';

export const TMDB_HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjVhODFiMjExZWQ1MmFjMTdhYmJhYWIyY2VjZDM5YSIsIm5iZiI' +
      '6MTczMzQ3NTU0OC45NzYsInN1YiI6IjY3NTJiY2RjODBlNWI4ZjBhNzU2MzEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZC' +
      'JdLCJ2ZXJzaW9uIjoxfQ.zX82V-5f3weDqX-4sTp4rvxY2YPyT7Z_AHdTLYYI2mI',
  },
};

export const TMDB_ENDPOINTS = {
  TRENDING_MOVIES: 'trending/movie/week',
  TRENDING_TV: 'trending/tv/week',
  TV_AIRING_TODAY: 'tv/airing_today',
  MOVIE_TOP_RATED: 'movie/top_rated',
} as const;

export const MEDIA_ACTIONS = {
  IS_WATCHED: 'isWatched',
  IS_LIKED: 'isLiked',
  RATING: 'rating',
  WATCH_STATUS: 'watchStatus',
} as const;

export const WATCH_STATUS = {
  TO_WATCH: 'toWatch',
  IS_WATCHING: 'isWatching',
  ON_HOLD: 'onHold',
  FAVORITES: 'favorites',
  ARCHIVED: 'archived',
} as const;
