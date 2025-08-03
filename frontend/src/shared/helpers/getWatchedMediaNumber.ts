import { MediaType } from '@shared/types/generalTypes';

export default function getWatchedMediaNumber(mediaActions: [any], mediaType: MediaType = 'movie') {
  const numberOfRecords = mediaActions.filter((mediaAction) => {
    if (mediaAction.mediaType === mediaType && mediaAction.isWatched) return 1;
  });

  return numberOfRecords.length;
}
