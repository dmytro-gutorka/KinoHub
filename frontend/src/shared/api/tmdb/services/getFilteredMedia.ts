import { MediaFiltersBase, MediaType } from '@shared/types/generalTypes';
import { tmdbService } from '@shared/api/tmdb/TmdbService';

async function getFilteredMedia({
  mediaType,
  genres,
  page,
  minRating,
  sortBy,
}: MediaFiltersBase & { mediaType: MediaType }) {
  const response = await tmdbService.getFilteredMedia({
    mediaType,
    genres,
    page,
    minRating,
    sortBy,
  });

  return response?.data;
}

export default getFilteredMedia;
