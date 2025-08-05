import { MediaFiltersBase, MediaType } from '@shared/types/generalTypes';
import { TmdbSearchFilteredResults } from '@entities/types/tmdbEntities';
import { useQuery } from '@tanstack/react-query';
import getTmdbFilteredMedia from '@shared/api/tmdb/services/getTmdbFilteredMedia';

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
    TmdbSearchFilteredResults<typeof mediaType>
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
