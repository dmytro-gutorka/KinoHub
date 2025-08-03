import { MediaType } from '@shared/types/generalTypes';

export default function mapMediaDetails(mediaItems: [any], mediaType: MediaType = 'movie') {
  const {
    first_air_date: airDate,
    vote_average: voteAverage,
    release_date: releaseDate,
    poster_path: posterPath,
    runtime,
    title,
    name,
  } = mediaItems;

  const relevantReleaseDate = airDate || releaseDate || 'N/A';
  const relevantTitle = name || title || 'No title';

  return {
    title: relevantTitle,
    mediaType,
    releaseDate: relevantReleaseDate,
    voteAverage,
    posterPath,
    runtime,
  };
}
