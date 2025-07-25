import { TMDB_URL, TMDB_OPTIONS } from '@app/constants';

async function getHomepageMediaData(endpoint) {
  const res = await fetch(`${TMDB_URL}/${endpoint}`, TMDB_OPTIONS);

  return await res.json();
}

export default getHomepageMediaData;
