import { SearchMediaParams } from '@shared/types/generalTypes';
import { tmdbService } from '@shared/api/tmdb-service';

async function getTmdbSearchedMedia({ page, mediaType, searchQuery }: SearchMediaParams) {
  const response = await tmdbService.getSearchedMedia({
    page,
    mediaType,
    searchQuery,
  });

  return response?.data;
}

export default getTmdbSearchedMedia;
