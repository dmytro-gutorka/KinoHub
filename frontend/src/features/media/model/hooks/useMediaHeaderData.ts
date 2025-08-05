import getPosterUrl from '@shared/helpers/getPosterUrl';
import { TmdbGenre, TmdbMovieDetails, TmdbTvShowDetails } from '@entities/types/tmdbEntities';
import { MediaType } from '@shared/types/generalTypes';

interface UseMediaHeaderDataReturn {
  genres: Array<TmdbGenre>;
  mediaId: number;
  imgUrl: string;
  title: string;
}

export default function useMediaHeaderData(
  tmdbMediaData: TmdbMovieDetails | TmdbTvShowDetails,
  mediaType: MediaType
): UseMediaHeaderDataReturn {
  const { genres, id: mediaId, poster_path: posterPath } = tmdbMediaData;

  const imgUrl: string = getPosterUrl(posterPath) || '';
  let title: string = 'Unknown';

  if (mediaType === 'tv') {
    title = (tmdbMediaData as TmdbTvShowDetails).name;
  }
  if (mediaType === 'movie') {
    title = (tmdbMediaData as TmdbMovieDetails).title;
  }

  return {
    genres,
    mediaId,
    imgUrl,
    title,
  };
}
