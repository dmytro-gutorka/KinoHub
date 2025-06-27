import { useQuery } from '@tanstack/react-query';
import createMediaActions from '../api/createMediaAction';

export default function useActionDataCreation(qrKey, mediaId, actionData) {
  return useQuery({
    queryKey: [qrKey, mediaId],
    queryFn: () => createMediaActions(mediaId, actionData),
  });
}
