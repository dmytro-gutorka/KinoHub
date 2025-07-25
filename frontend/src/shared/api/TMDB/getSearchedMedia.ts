import { TMDB_URL, TMDB_HEADERS } from '@app/constants';

// @ts-ignore
import axios from 'axios';
import { SearchedMediaParams } from '@shared/types/generalTypes';

async function getSearchedMedia({
  page = 1,
  mediaType = 'movie',
  searchQuery = '',
}: SearchedMediaParams) {
  const response = await axios.get(`${TMDB_URL}/search/${mediaType}`, {
    ...TMDB_HEADERS,
    params: { query: searchQuery, page },
  });

  console.log(searchQuery);

  return response?.data;
}

export default getSearchedMedia;
