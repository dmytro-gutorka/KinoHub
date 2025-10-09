import { MediaType } from '@shared/types/generalTypes';
import { TmdbMediaDetailsResponse } from '@entities/types/tmdbEntities';
import { tmdbService } from '@shared/api/tmdb-service';

export default async function getTmdbMediaDetails<T extends MediaType>(
  mediaId: number,
  mediaType: T
): Promise<TmdbMediaDetailsResponse<T> | null> {
  const response = await tmdbService.getMediaDetails(mediaId, mediaType);

  return response?.data as TmdbMediaDetailsResponse<T> | null;
}
