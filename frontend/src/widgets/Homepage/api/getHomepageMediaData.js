import { TMDB_URL, TMDB_HEADERS } from '@app/constants';

async function getHomepageMediaData(endpoint) {
  const res = await fetch(`${TMDB_URL}/${endpoint}`, TMDB_HEADERS);

  return await res.json();
}

export default getHomepageMediaData;
