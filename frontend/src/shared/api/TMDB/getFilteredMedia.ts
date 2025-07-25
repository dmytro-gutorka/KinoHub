import { TMDB_URL, TMDB_OPTIONS } from '@app/constants';
import { MediaType, SortBy } from '@shared/types/generalTypes';

// @ts-ignore
import axios from 'axios';

interface Genre {
  id: number;
}

async function getFilteredMedia(
  page: number = 1,
  mediaType: MediaType = 'movie',
  minRating: number = 0,
  genres: Genre[] = [],
  sortBy: SortBy = SortBy.YearDESC
) {
  const genreString: string = genres.map((g) => g.id).join('|');
  const response = await axios.get(`${TMDB_URL}/discover/${mediaType}`, {
    ...TMDB_OPTIONS,
    params: {
      page,
      sort_by: sortBy,
      with_genres: genreString || undefined,
      'vote_average.gte': minRating,
    },
  });

  console.log(response);

  return response.data;
}

export default getFilteredMedia;
