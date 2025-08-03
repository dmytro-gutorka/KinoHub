export const TMDB_ENDPOINTS = {
  TRENDING_MOVIES: 'trending/movie/week',
  TRENDING_TV: 'trending/tv/week',
  TV_AIRING_TODAY: 'tv/airing_today',
  MOVIE_TOP_RATED: 'movie/top_rated',
} as const;

export type HomepageMedia = [
  PromiseSettledResult<any>,
  PromiseSettledResult<any>,
  PromiseSettledResult<any>,
  PromiseSettledResult<any>,
];
