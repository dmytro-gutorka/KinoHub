import { MediaType } from '@shared/types/generalTypes';
import { tmdbService } from '@shared/api/tmdb/TmdbService';

async function getTmdbMediaDetails(mediaId: number, mediaType: MediaType) {
  const response = await tmdbService.getMediaDetails(mediaId, mediaType);

  return response?.data;
}

export default getTmdbMediaDetails;
