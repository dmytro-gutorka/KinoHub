import { useQuery } from '@tanstack/react-query';
import getMovieDetails from '../../../shared/api/getMovieDetails';
import createMediaActions from '../../../shared/api/createMediaAction';

export default function useMediaDetails() {
  const { data } = useQuery({
    queryKey: ['mediaDetailsPage', id],
    queryFn: () => getMovieDetails(id, mediaType),
  });

  const { serverData, isSuccess } = useQuery({
    queryKey: ['mediaDetailsPageServer', mediaId],
    queryFn: () => createMediaActions(mediaId, actionData),
  });
}
