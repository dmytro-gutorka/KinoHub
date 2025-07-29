import { SearchedMediaParams } from '@shared/types/generalTypes';
import { tmdbService } from '@shared/api/tmdb/TmdbService';

async function getTmdbSearchedMedia({ page, mediaType, searchQuery }: SearchedMediaParams) {
  const response = await tmdbService.getSearchedMedia({ page, mediaType, searchQuery });

  return response?.data;
}

export default getTmdbSearchedMedia;
