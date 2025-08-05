import { TMDB_HEADERS, TMDB_URL } from '@app/constants';
import { TmdbMediaDetailsResponse, TmdbSearchFilteredResults } from '@entities/types/tmdbEntities';
import { MediaFiltersBase, MediaType, SearchMediaParams, SortBy } from '@shared/types/generalTypes';
import AxiosInstance = Axios.AxiosInstance;
import axios from 'axios';

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

  getSeasonDetails(mediaId: number = 1, season: number = 1) {
    return this.axiosInstance.get(`/tv/${mediaId}/season/${season}`, {
      params: { append_to_response: 'episode' },
    });
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
  }: MediaFiltersBase & { mediaType: MediaType }) {
    const genreString: string = genres.map((g) => g.id).join('|');

    return this.axiosInstance.get<TmdbSearchFilteredResults<typeof mediaType>>(
      `/discover/${mediaType}`,
      {
        params: {
          page,
          sort_by: sortBy,
          with_genres: genreString || undefined,
          'vote_average.gte': minRating,
          without_genres: this.genresToExclude,
        },
      }
    );
  }

  getSearchedMedia({ page = 1, mediaType = 'movie', searchQuery = '' }: SearchMediaParams) {
    return this.axiosInstance.get<TmdbSearchFilteredResults<typeof mediaType>>(
      `/search/${mediaType}`,
      {
        params: { query: searchQuery, page },
      }
    );
  }
}

export const tmdbService = new TmdbService();
