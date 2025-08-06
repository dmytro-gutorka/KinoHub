import { TMDB_HEADERS, TMDB_URL } from '@app/constants';
import {
  TmdbMediaListResults,
  TmdbMediaSearchedFilteredResponse,
} from '@entities/types/tmdbEntities';
import { MediaFiltersBase, MediaType, SearchMediaParams, SortBy } from '@shared/types/generalTypes';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

class TmdbService {
  private readonly genresToExclude: string;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.genresToExclude = '10763|10767';
    this.axiosInstance = axios.create({
      baseURL: TMDB_URL,
      headers: TMDB_HEADERS.headers,
    });
  }

  getEpisodeList(tvShowId: number = 1, seasonNumber: number = 1): Promise<AxiosResponse<any>> {
    return this.axiosInstance.get(`/tv/${tvShowId}/season/${seasonNumber}`);
  }

  getMediaDetails(mediaId: number = 1, mediaType: MediaType = 'movie') {
    return this.axiosInstance.get(`/${mediaType}/${mediaId}`, {
      params: { append_to_response: 'credits' },
    });
  }

  getFilteredMedia({
    mediaType = 'movie',
    genres = [],
    page = 1,
    minRating = 0,
    sortBy = SortBy.YearDESC,
  }: MediaFiltersBase & { mediaType: MediaType }): Promise<
    AxiosResponse<TmdbMediaListResults<TmdbMediaSearchedFilteredResponse<typeof mediaType>>>
  > {
    const genreString: string = genres.map((g) => g.id).join('|');

    return this.axiosInstance.get(`/discover/${mediaType}`, {
      params: {
        page,
        sort_by: sortBy,
        without_genres: this.genresToExclude,
        with_genres: genreString || undefined,
        'vote_average.gte': minRating,
      },
    });
  }

  getSearchedMedia({
    page = 1,
    mediaType = 'movie',
    searchQuery = '',
  }: SearchMediaParams): Promise<
    AxiosResponse<TmdbMediaListResults<TmdbMediaSearchedFilteredResponse<typeof mediaType>>>
  > {
    return this.axiosInstance.get(`/search/${mediaType}`, {
      params: { query: searchQuery, page },
    });
  }

  getMediaList<T>(endpoint: string): Promise<AxiosResponse<TmdbMediaListResults<Array<T>>>> {
    return this.axiosInstance.get(endpoint);
  }
}

export const tmdbService = new TmdbService();
