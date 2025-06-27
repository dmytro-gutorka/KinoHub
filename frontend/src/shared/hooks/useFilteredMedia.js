import { useQuery } from '@tanstack/react-query';
import getMediaDataByPage from '../api/getMediaDataByPage';

const useFilteredMedia = (qrKey, page, minRating, genres, sortBy, mediaType) => {
  return useQuery({
    queryFn: () => getMediaDataByPage(page, minRating, genres, sortBy, mediaType),
    queryKey: [qrKey, page, minRating, genres, sortBy],
  });
};

export default useFilteredMedia;
