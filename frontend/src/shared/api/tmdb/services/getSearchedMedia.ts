import { SearchedMediaParams } from '@shared/types/generalTypes';
import { tmdbService } from '@shared/api/tmdb/TmdbService';

async function getSearchedMedia({ page, mediaType, searchQuery }: SearchedMediaParams) {
  const response = await tmdbService.getSearchedMedia({ page, mediaType, searchQuery });

  return response?.data;
}

export default getSearchedMedia;
