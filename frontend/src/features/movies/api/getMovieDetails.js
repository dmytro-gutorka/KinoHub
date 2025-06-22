import { TMDB_URL, TMDB_OPTIONS } from '../../../app/constants';

async function getMovieDetails(id, mediaType = 'movie') {
  const res = await fetch(`${TMDB_URL}/3/${mediaType}/${id}?append_to_response=credits&language=en-US`, TMDB_OPTIONS);

  return await res.json();
}

export default getMovieDetails;
