import { useQuery } from '@tanstack/react-query';
import getMediaDetails from '../../../shared/api/getMediaDetails';
import createMediaActions from '../../../shared/api/createMediaAction';
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
      return createMediaActions(mediaId, parseMediaDetails(mediaData, mediaType)).then((data) => ({
        ...mediaData,
        ...data,
      }));
    },
    enabled: isSuccess,
    staleTime: 0,
  });

  if (isSuccess) console.log(mediaData);

  return { mediaDataWithActions };
}
