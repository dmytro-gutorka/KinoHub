import { TMDB_URL, TMDB_OPTIONS } from '@app/constants';

async function getMediaDetails(id, mediaType = 'movie') {
  const res = await fetch(`${TMDB_URL}${mediaType}/${id}?append_to_response=credits`, TMDB_OPTIONS);

  return await res.json();
}

export default getMediaDetails;
