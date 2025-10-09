import { useQuery } from '@tanstack/react-query';
import { tmdbService } from '@shared/api/tmdb-service';
import { AxiosResponse } from 'axios';
import {
  TmdbMediaListResults,
  TmdbTrendingMovieDetails,
  TmdbTrendingTvShowDetails,
} from '@entities/types/tmdbEntities';

export const TMDB_HOMEPAGE_ENDPOINTS = {
  TRENDING_MOVIES: 'trending/movie/week',
  TRENDING_TV: 'trending/tv/week',
  TV_AIRING_TODAY: 'tv/airing_today',
  MOVIE_TOP_RATED: 'movie/top_rated',
} as const;

type SettledMedia<T> = PromiseSettledResult<AxiosResponse<TmdbMediaListResults<T[]>>>;

type HomepageMedia = [
  SettledMedia<TmdbTrendingMovieDetails>,
  SettledMedia<TmdbTrendingMovieDetails>,
  SettledMedia<TmdbTrendingTvShowDetails>,
  SettledMedia<TmdbTrendingTvShowDetails>,
];

export default function useHomepageMedia() {
  const { data: homepageData, isLoading } = useQuery<HomepageMedia>({
    queryKey: ['homepageMedia'],
    queryFn: () =>
      Promise.allSettled([
        tmdbService.getMediaList<TmdbTrendingMovieDetails>(TMDB_HOMEPAGE_ENDPOINTS.MOVIE_TOP_RATED),
        tmdbService.getMediaList<TmdbTrendingMovieDetails>(TMDB_HOMEPAGE_ENDPOINTS.TRENDING_MOVIES),
        tmdbService.getMediaList<TmdbTrendingTvShowDetails>(TMDB_HOMEPAGE_ENDPOINTS.TRENDING_TV),
        tmdbService.getMediaList<TmdbTrendingTvShowDetails>(
          TMDB_HOMEPAGE_ENDPOINTS.TV_AIRING_TODAY
        ),
      ]),
  });

  const topRatedMovies =
    homepageData?.[0]?.status === 'fulfilled' ? homepageData[0].value.data.results : [];
  const trendingMovies =
    homepageData?.[1]?.status === 'fulfilled' ? homepageData[1].value.data.results : [];
  const trendingTv =
    homepageData?.[2]?.status === 'fulfilled' ? homepageData[2].value.data.results : [];
  const tvAiringToday =
    homepageData?.[3]?.status === 'fulfilled' ? homepageData[3].value.data.results : [];

  return {
    isLoading,
    topRatedMovies,
    trendingMovies,
    trendingTv,
    tvAiringToday,
  };
}
