import { MediaFiltersBase, MediaType } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getTmdbFilteredMedia from '@shared/api/tmdb/services/getTmdbFilteredMedia';
import {
  TmdbMediaListResults,
  TmdbMediaSearchedFilteredResponse,
} from '@entities/types/tmdbEntities';

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
  const { data: filteredData, isLoading: filterLoading } = useQuery<
    TmdbMediaListResults<Array<TmdbMediaSearchedFilteredResponse<typeof mediaType>>>
  >({
    queryFn: () => getTmdbFilteredMedia({ page, mediaType, minRating, genres, sortBy }),
    queryKey: [qrKey, mediaType, page, minRating, genres, sortBy],
  });

  return {
    filteredData,
    filterLoading,
  };
};

export default useFilteredMedia;
