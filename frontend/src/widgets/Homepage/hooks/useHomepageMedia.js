import { useQuery } from '@tanstack/react-query';
import getHomepageMedia from '../api/getHomepageMedia';
import { TMDB_ENDPOINTS } from '@app/constants';

export default function useHomepageMedia() {
  return useQuery({
    queryKey: ['homepageMedia'],
    queryFn: () => {
      return Promise.allSettled([
        getHomepageMedia(TMDB_ENDPOINTS.MOVIE_TOP_RATED),
        getHomepageMedia(TMDB_ENDPOINTS.TRENDING_MOVIES),
        getHomepageMedia(TMDB_ENDPOINTS.TRENDING_TV),
        getHomepageMedia(TMDB_ENDPOINTS.TV_AIRING_TODAY),
      ]);
    },
  });
}
