import { TMDB_URL, TMDB_OPTIONS } from '../../../app/constants';

async function getTopRatedMovies() {
  const page = 1;

  const res = await fetch(
    `${TMDB_URL}/3/movie/top_rated?language=en-US&page=${page}`,
    TMDB_OPTIONS
  );

  return await res.json();
}

export default getTopRatedMovies;
