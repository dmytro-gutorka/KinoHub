import { tmdbService } from '@shared/api/tmdb/TmdbService';

async function getTmdbEpisodeList(tvShowId: number, seasonNumber: number) {
  const response = await tmdbService.getEpisodeList(tvShowId, seasonNumber);

  return response?.data;
}

export default getTmdbEpisodeList;
