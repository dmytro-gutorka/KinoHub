import { TMDB_URL, TMDB_OPTIONS } from '@app/constants';

async function getMediaByTitle(page = 1, mediaType = 'movie', query) {
  const res = await fetch(
    `${TMDB_URL}/search/${mediaType}?query=${query}&page=${page}`,
    TMDB_OPTIONS
  );

  return await res.json();
}

export default getMediaByTitle;
