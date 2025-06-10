import { TMDB_URL, TMDB_OPTIONS } from '../../../config/constants';

async function getPopularMovies() {
  const page = 1;
  console.log(page);
  const res = await fetch(`${TMDB_URL}/3/movie/popular?language=en-US&page=${page}`, TMDB_OPTIONS);

  return await res.json();
}

export default getPopularMovies;
