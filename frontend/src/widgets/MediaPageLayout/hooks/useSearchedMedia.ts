import { useQuery } from '@tanstack/react-query';
import getTmdbSearchedMedia from '@shared/api/tmdb/services/getTmdbSearchedMedia';
import { SearchedMediaParams } from '@shared/types/generalTypes';

interface SearchedMediaForQuery extends SearchedMediaParams {
  qrKey: string;
}
const useSearchedMedia = ({ qrKey, page, mediaType, searchQuery }: SearchedMediaForQuery) => {
  return useQuery({
    queryFn: () => getTmdbSearchedMedia({ page, mediaType, searchQuery }),
    queryKey: [qrKey, mediaType, page, searchQuery],
    enabled: searchQuery.length >= 2,
  });
};

export default useSearchedMedia;
