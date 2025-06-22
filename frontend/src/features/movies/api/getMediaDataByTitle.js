import { TMDB_URL, TMDB_OPTIONS } from '../../../app/constants';

async function getMediaDataByTitle(page = 1, query, mediaType) {
  const res = await fetch(
    `${TMDB_URL}/3/search/${mediaType}?query=${query}&include_adult=false&language=en-US&page=${page}`,
    TMDB_OPTIONS
  );

  return await res.json();
}

export default getMediaDataByTitle;
