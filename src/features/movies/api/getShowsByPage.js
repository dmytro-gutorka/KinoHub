import { TMDB_URL, TMDB_OPTIONS } from '../../../config/constants';

async function getShowsByPage() {
  const page = 1;

  const res = await fetch(
    `${TMDB_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    TMDB_OPTIONS
  );

  return await res.json();
}

export default getShowsByPage;
