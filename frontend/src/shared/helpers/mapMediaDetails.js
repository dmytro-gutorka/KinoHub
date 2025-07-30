export default function mapMediaDetails(mediaData, mediaType) {
  const {
    first_air_date: airDate,
    vote_average: voteAverage,
    release_date: releaseDate,
    poster_path: posterPath,
    runtime,
    title,
    name,
  } = mediaData;

  const relevantReleaseDate = airDate || releaseDate || 'N/A';
  const relevantTitle = name || title || 'No title';

  return {
    releaseDate: relevantReleaseDate,
    title: relevantTitle,
    voteAverage,
    posterPath,
    mediaType,
    runtime,
  };
}
