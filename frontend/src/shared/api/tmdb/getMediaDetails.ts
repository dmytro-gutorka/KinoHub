import { MediaType } from '@shared/types/generalTypes';
import { tmdbService } from '@shared/api/tmdb/TmdbService';

async function getMediaDetails(id: number, mediaType: MediaType) {
  const response = await tmdbService.getMediaDetails(id, mediaType);

  return response?.data;
}

export default getMediaDetails;
