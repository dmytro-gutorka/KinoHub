import { useQuery } from '@tanstack/react-query';
import getFilteredMedia from '../api/TMDB/getFilteredMedia';

const useFilteredMedia = (qrKey, page, mediaType, minRating, genres, sortBy) => {
  return useQuery({
    queryFn: () => getFilteredMedia(page, mediaType, minRating, genres, sortBy),
    queryKey: [qrKey, mediaType, page, minRating, genres, sortBy],
  });
};

export default useFilteredMedia;
