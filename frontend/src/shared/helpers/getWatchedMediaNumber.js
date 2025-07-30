export default function getWatchedMediaNumber(mediaActionList, mediaType = 'movie') {
  const numberOfRecords = mediaActionList.filter((mediaAction) => {
    if (mediaAction.mediaType === mediaType && mediaAction.isWatched) return 1;
  });

  return numberOfRecords.length;
}
