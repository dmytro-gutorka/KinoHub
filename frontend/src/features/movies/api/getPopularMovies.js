import { TMDB_URL, TMDB_OPTIONS } from '../../../app/constants';

async function getPopularMovies(page = 1) {
  const res = await fetch(`${TMDB_URL}/3/movie/popular?page=${page}`, TMDB_OPTIONS);

  return await res.json();
}

export default getPopularMovies;
