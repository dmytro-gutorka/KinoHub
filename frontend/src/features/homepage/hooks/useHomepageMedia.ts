import { HomepageMedia, TMDB_ENDPOINTS } from '@features/homepage/types/homepageTypes';
import { useQuery } from '@tanstack/react-query';
import getHomepageMedia from '@features/homepage/api/getHomepageMedia';

export default function useHomepageMedia() {
  const { data: homepageData, isLoading } = useQuery<HomepageMedia>({
    queryKey: ['homepageMedia'],
    queryFn: () =>
      Promise.allSettled([
        getHomepageMedia(TMDB_ENDPOINTS.MOVIE_TOP_RATED),
        getHomepageMedia(TMDB_ENDPOINTS.TRENDING_MOVIES),
        getHomepageMedia(TMDB_ENDPOINTS.TRENDING_TV),
        getHomepageMedia(TMDB_ENDPOINTS.TV_AIRING_TODAY),
      ]),
  });

  const topRatedMovies =
    homepageData?.[0]?.status === 'fulfilled' ? homepageData[0]?.value?.results : [];
  const trendingMovies =
    homepageData?.[1]?.status === 'fulfilled' ? homepageData[1]?.value?.results : [];
  const trendingTv =
    homepageData?.[2]?.status === 'fulfilled' ? homepageData[2]?.value?.results : [];
  const tvAiringToday =
    homepageData?.[3]?.status === 'fulfilled' ? homepageData[3]?.value?.results : [];

  return {
    isLoading,
    topRatedMovies,
    trendingMovies,
    trendingTv,
    tvAiringToday,
  };
}
