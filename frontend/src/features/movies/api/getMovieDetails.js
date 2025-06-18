import { TMDB_URL, TMDB_OPTIONS } from '../../../config/constants';

async function getMovieDetails(id) {
  const res = await fetch(`${TMDB_URL}/3/movie/${id}?append_to_response=credits&language=en-US`, TMDB_OPTIONS);

  return await res.json();
}

export default getMovieDetails;
