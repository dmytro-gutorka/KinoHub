import { TMDB_URL, TMDB_HEADERS } from '@app/constants';

// @ts-ignore
import axios from 'axios';

class TmdbRequestsFactory {
  public axiosInstance: any;

  constructor() {
    this.axiosInstance = axios.create({
      method: 'get',
      baseURL: TMDB_URL,
      headers: TMDB_HEADERS.headers,
    });
  }

  getSeasonDetails(id: number, season: number) {
    return this.axiosInstance.create({
      url: `${TMDB_URL}/tv/${id}/season/${season}`,
      params: { append_to_response: 'episode' },
    });
  }
}

const tmdbRequestsFactory = new TmdbRequestsFactory();

async function getSeasonDetails(id: number = 1, season: number = 1) {
  const response = await tmdbRequestsFactory.getSeasonDetails(id, season).get();

  return response?.data;
}

export default getSeasonDetails;
