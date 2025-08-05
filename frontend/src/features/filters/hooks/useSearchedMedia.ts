import { TmdbSearchFilteredResults } from '@entities/types/tmdbEntities';
import { SearchMediaParams } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getTmdbSearchedMedia from '@shared/api/tmdb/services/getTmdbSearchedMedia';

interface SearchedMediaQuery extends SearchMediaParams {
  qrKey: string;
}

const useSearchedMedia = ({ qrKey, page, mediaType, searchQuery }: SearchedMediaQuery) => {
  const { data: searchData, isLoading: searchLoading } = useQuery<
    TmdbSearchFilteredResults<typeof mediaType>
  >({
    queryFn: () => getTmdbSearchedMedia({ page, mediaType, searchQuery }),
    queryKey: [qrKey, mediaType, page, searchQuery],
    enabled: searchQuery.length >= 2,
  });

  return {
    searchData,
    searchLoading,
  };
};

export default useSearchedMedia;
