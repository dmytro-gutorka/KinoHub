export default function getAvgRating(mediaActions: [any]) {
  const recordsWithRuntime = mediaActions.filter((mediaAction) => mediaAction.rating);
  const ratingSum = recordsWithRuntime.reduce((acc, { rating }) => acc + rating, 0);

  if (!recordsWithRuntime.length) return 0;

  return (ratingSum / recordsWithRuntime.length).toFixed(2);
}
