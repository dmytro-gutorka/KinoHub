import { TMDB_HEADERS, TMDB_URL } from '@app/constants';

// @ts-ignore
import axios, { AxiosInstance } from 'axios';
import {
  MediaFiltersBase,
  MediaType,
  SearchedMediaParams,
  SortBy,
} from '@shared/types/generalTypes';

class TmdbService {
  public axiosInstance: any;

  constructor() {
    this.axiosInstance = axios.create({
      method: 'get',
      baseURL: TMDB_URL,
      headers: TMDB_HEADERS.headers,
    });
  }

  getSeasonDetails(id: number = 1, season: number = 1) {
    return this.axiosInstance.get(`/tv/${id}/season/${season}`, {
      params: { append_to_response: 'episode' },
    });
  }

  getMediaDetails(id: number = 1, mediaType: MediaType = 'movie') {
    return this.axiosInstance.get(`/${mediaType}/${id}`, {
      params: { append_to_response: 'credits' },
    });
  }

  getFilteredMedia({
    mediaType = 'movie',
    genres = [],
    page = 1,
    minRating = 0,
    sortBy = SortBy.YearDESC,
  }: MediaFiltersBase & { mediaType: MediaType }) {
    const genreString: string = genres.map((g) => g.id).join('|');

    return this.axiosInstance.get(`/discover/${mediaType}`, {
      params: {
        page,
        sort_by: sortBy,
        with_genres: genreString || undefined,
        'vote_average.gte': minRating,
      },
    });
  }

  getSearchedMedia({ page = 1, mediaType = 'movie', searchQuery = '' }: SearchedMediaParams) {
    return this.axiosInstance.get(`/search/${mediaType}`, {
      params: { query: searchQuery, page },
    });
  }
}

export const tmdbService = new TmdbService();
