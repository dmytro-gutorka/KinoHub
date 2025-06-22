import { TMDB_URL, TMDB_OPTIONS } from '../../../app/constants';

async function getUpcomingMovies() {
  const page = 1;
  console.log(page);
  const res = await fetch(`${TMDB_URL}/3/movie/upcoming?page=${page}`, TMDB_OPTIONS);

  return await res.json();
}

export default getUpcomingMovies;
