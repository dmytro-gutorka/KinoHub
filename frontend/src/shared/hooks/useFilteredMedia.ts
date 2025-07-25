import { useQuery } from '@tanstack/react-query';
import getFilteredMedia from '../api/TMDB/getFilteredMedia';
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
    queryFn: () => getFilteredMedia({ page, mediaType, minRating, genres, sortBy }),
    queryKey: [qrKey, mediaType, page, minRating, genres, sortBy],
  });
};

export default useFilteredMedia;
