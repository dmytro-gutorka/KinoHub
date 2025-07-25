import { useQuery } from '@tanstack/react-query';
import getMediaByTitle from '../api/TMDB/getMediaByTitle';

const useSearchedMedia = (qrKey, page, searchQuery, mediaType) => {
  return useQuery({
    queryFn: () => getMediaByTitle(page, searchQuery, mediaType),
    queryKey: [qrKey, page, searchQuery],
    enabled: searchQuery.length >= 2,
  });
};

export default useSearchedMedia;
