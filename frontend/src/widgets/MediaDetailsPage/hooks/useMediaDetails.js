import { useQuery } from '@tanstack/react-query';
import getMediaDetails from '@shared/api/TMDB/getMediaDetails';
import createMediaActions from '@shared/api/kinohub/createMediaAction';
import parseMediaDetails from '../../../shared/helpers/parseMediaDetails';

export default function useMediaDetails(mediaId, mediaType) {
  const { data: mediaData, isSuccess } = useQuery({
    queryKey: ['mediaDetailsData', mediaId],
    queryFn: () => getMediaDetails(mediaId, mediaType),
    staleTime: 0,
  });

  const { data: mediaDataWithActions } = useQuery({
    queryKey: ['mediaDetailsExtraData', mediaId],
    queryFn: () => {
      return createMediaActions(mediaId, parseMediaDetails(mediaData, mediaType)).then(
        (actionsData) => ({
          ...actionsData,
          ...mediaData,
        })
      );
    },
    enabled: isSuccess,
    staleTime: 0,
  });

  return { mediaDataWithActions };
}
