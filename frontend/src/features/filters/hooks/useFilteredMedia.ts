import { useQuery } from '@tanstack/react-query';
import getTmdbFilteredMedia from '@shared/api/tmdb/services/getTmdbFilteredMedia';
import { MediaFiltersBase, MediaType } from '@shared/types/generalTypes';

interface MediaFiltersForQuery extends MediaFiltersBase {
  mediaType: MediaType;
  qrKey: string;
}

const useFilteredMedia = ({
  qrKey,
  page,
  mediaType,
  minRating,
  genres,
  sortBy,
}: MediaFiltersForQuery) => {
  return useQuery({
    queryFn: () => getTmdbFilteredMedia({ page, mediaType, minRating, genres, sortBy }),
    queryKey: [qrKey, mediaType, page, minRating, genres, sortBy],
  });
};

export default useFilteredMedia;
