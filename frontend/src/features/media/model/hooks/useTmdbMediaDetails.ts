import { MediaType } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getTmdbMediaDetails from '@shared/api/tmdb/services/getTmdbMediaDetails';

export default function useTmdbMediaDetails(mediaId: number, mediaType: MediaType) {
  return useQuery({
    queryKey: ['tmdbMediaDetails', mediaType, mediaId],
    queryFn: () => getTmdbMediaDetails(mediaId, mediaType),
  });
}
