export default function getWatchedEpisodeNumber(mediaActionList) {
  const numberOfRecords = mediaActionList.filter((mediaAction) => {
    if (mediaAction.episode && mediaAction.isWatched) return 1;
  });

  return numberOfRecords.length;
}
