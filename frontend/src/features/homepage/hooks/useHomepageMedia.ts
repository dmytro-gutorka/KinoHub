import { HomepageMedia, TMDB_ENDPOINTS } from '@features/homepage/types/homepageTypes';
import { useQuery } from '@tanstack/react-query';
import getHomepageMedia from '@features/homepage/api/getHomepageMedia';

export default function useHomepageMedia() {
  return useQuery<HomepageMedia>({
    queryKey: ['homepageMedia'],
    queryFn: () =>
      Promise.allSettled([
        getHomepageMedia(TMDB_ENDPOINTS.MOVIE_TOP_RATED),
        getHomepageMedia(TMDB_ENDPOINTS.TRENDING_MOVIES),
        getHomepageMedia(TMDB_ENDPOINTS.TRENDING_TV),
        getHomepageMedia(TMDB_ENDPOINTS.TV_AIRING_TODAY),
      ]),
  });
}
