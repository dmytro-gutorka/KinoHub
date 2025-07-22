import { TMDB_URL, TMDB_OPTIONS } from '@app/constants';

async function getTvShowSeasonDetails(id, season) {
  const res = await fetch(
    `${TMDB_URL}tv/${id}/season/${season}?append_to_response=episode`,
    TMDB_OPTIONS
  );

  return await res.json();
}

export default getTvShowSeasonDetails;
