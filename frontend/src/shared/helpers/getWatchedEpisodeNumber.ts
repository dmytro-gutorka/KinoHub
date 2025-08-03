export default function getWatchedEpisodeNumber(mediaActions: [any]) {
  const numberOfRecords = mediaActions.filter((mediaAction) => {
    if (mediaAction.episode && mediaAction.isWatched) return 1;
  });

  return numberOfRecords.length;
}
