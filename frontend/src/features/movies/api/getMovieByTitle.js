import { TMDB_URL, TMDB_OPTIONS } from '../../../config/constants';

async function getMoviesByTitle(page = 1, query) {
  const res = await fetch(
    `${TMDB_URL}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    TMDB_OPTIONS
  );

  return await res.json();
}

export default getMoviesByTitle;
