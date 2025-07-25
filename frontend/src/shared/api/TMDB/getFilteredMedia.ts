import { TMDB_URL, TMDB_HEADERS } from '@app/constants';
import { MediaFiltersBase, MediaType, SortBy } from '@shared/types/generalTypes';

// @ts-ignore
import axios from 'axios';

async function getFilteredMedia({
  mediaType = 'movie',
  genres = [],
  page = 1,
  minRating = 0,
  sortBy = SortBy.YearDESC,
}: MediaFiltersBase & { mediaType: MediaType }) {
  const genreString: string = genres.map((g) => g.id).join('|');

  const response = await axios.get(`${TMDB_URL}/discover/${mediaType}`, {
    ...TMDB_HEADERS,
    params: {
      page,
      sort_by: sortBy,
      with_genres: genreString || undefined,
      'vote_average.gte': minRating,
    },
  });

  return response.data;
}

export default getFilteredMedia;
