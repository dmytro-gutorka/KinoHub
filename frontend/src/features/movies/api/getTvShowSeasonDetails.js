import { TMDB_URL, TMDB_OPTIONS } from '../../../config/constants';

async function getTvShowSeasonDetails(id, season) {
  const res = await fetch(`${TMDB_URL}/3/tv/${id}/season/${season}?append_to_response=episode&language=en-US`, TMDB_OPTIONS);

  return await res.json();
}

export default getTvShowSeasonDetails