import { useQuery } from '@tanstack/react-query';
import getSearchedMedia from '../api/TMDB/getSearchedMedia';
import { SearchedMediaParams } from '@shared/types/generalTypes';

interface SearchedMediaForQuery extends SearchedMediaParams {
  qrKey: string;
}
const useSearchedMedia = ({ qrKey, page, mediaType, searchQuery }: SearchedMediaForQuery) => {
  return useQuery({
    queryFn: () => getSearchedMedia({ page, mediaType, searchQuery }),
    queryKey: [qrKey, mediaType, page, searchQuery],
    enabled: searchQuery.length >= 2,
  });
};

export default useSearchedMedia;
