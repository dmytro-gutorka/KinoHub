import { useQuery } from '@tanstack/react-query';
import getMediaDataByTitle from '../../features/movies/api/getMediaDataByTitle';

const useSearchedMedia = (qrKey, page, searchQuery, mediaType) => {
  return useQuery({
    queryFn: () => getMediaDataByTitle(page, searchQuery, mediaType),
    queryKey: [qrKey, page, searchQuery],
    enabled: searchQuery.length >= 2,
  });
};

export default useSearchedMedia;
