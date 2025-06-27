import { TMDB_URL, TMDB_OPTIONS } from '../../app/constants';

async function getShowsByPage(page = 1) {
  const res = await fetch(`${TMDB_URL}discover/tv?page=${page}`, TMDB_OPTIONS);

  return await res.json();
}

export default getShowsByPage;
