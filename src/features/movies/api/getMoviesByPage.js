import { TMDB_URL, TMDB_OPTIONS } from '../../../config/constants';

async function getMoviesByPage(page = 1) {
  const res = await fetch(
    `${TMDB_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    TMDB_OPTIONS
  );

  return await res.json();
}

export default getMoviesByPage;
