import { useQuery } from '@tanstack/react-query';
import getMovieDetails from '../../../shared/api/getMovieDetails';

export default function useMediaDetailsPage(id, mediaType) {
  return useQuery({
    queryKey: ['mediaDetailsPage', id],
    queryFn: () => getMovieDetails(id, mediaType),
  });
}
