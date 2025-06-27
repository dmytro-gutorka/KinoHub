import { useQuery } from '@tanstack/react-query';
import getHomepageMediaData from '../api/getHomepageMediaData';
import { TMDB_ENDPOINTS } from '../../../app/constants';

export default function useHomePageMedia() {
  return useQuery({
    queryKey: ['homepageMedia'],
    queryFn: () => {
      return Promise.allSettled([
        getHomepageMediaData(TMDB_ENDPOINTS.MOVIE_TOP_RATED),
        getHomepageMediaData(TMDB_ENDPOINTS.TRENDING_MOVIES),
        getHomepageMediaData(TMDB_ENDPOINTS.TRENDING_TV),
        getHomepageMediaData(TMDB_ENDPOINTS.TV_AIRING_TODAY),
      ]);
    },
  });
}
