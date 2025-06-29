export default function getAvgRating(mediaActionList) {
  const recordsWithRuntime = mediaActionList.filter((mediaAction) => mediaAction.rating);
  const ratingSum = recordsWithRuntime.reduce((acc, { rating }) => acc + rating, 0);

  if (!recordsWithRuntime.length) return 0;

  return (ratingSum / recordsWithRuntime.length).toFixed(2);
}
