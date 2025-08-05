import { MediaType } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getTmdbMediaDetails from '@shared/api/tmdb/services/getTmdbMediaDetails';

export default function useTmdbMediaDetails(mediaId: number, mediaType: MediaType) {
  const { data: tmdbMediaData, isLoading: isTmdbMediaLoading } = useQuery({
    queryKey: ['tmdbMediaDetails', mediaType, mediaId],
    queryFn: () => getTmdbMediaDetails(mediaId, mediaType),
  });

  return {
    tmdbMediaData,
    isTmdbMediaLoading,
  };
}
