import { MediaType } from '@shared/types/generalTypes';
import { TmdbMovieDetails, TmdbTvShowDetails } from '@shared/types/tmdbResponces';
import { tmdbService } from '@shared/api/tmdb/TmdbService';

type TmdbMediaDetailsResponse<T extends MediaType> = T extends 'tv'
  ? TmdbTvShowDetails
  : TmdbMovieDetails;

async function getTmdbMediaDetails<T extends MediaType>(
  mediaId: number,
  mediaType: T
): Promise<TmdbMediaDetailsResponse<T> | null> {
  const response = await tmdbService.getMediaDetails(mediaId, mediaType);

  return response?.data as TmdbMediaDetailsResponse<T> | null;
}

export default getTmdbMediaDetails;
