import { tmdbService } from '@shared/api/tmdb/TmdbService';

async function getSeasonDetails(id: number, season: number) {
  const response = await tmdbService.getSeasonDetails(id, season);

  return response?.data;
}

export default getSeasonDetails;
