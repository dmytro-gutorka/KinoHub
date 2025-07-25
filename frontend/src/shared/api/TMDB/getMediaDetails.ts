import { TMDB_URL, TMDB_HEADERS } from '@app/constants';
import { MediaType } from '@shared/types/generalTypes';

// @ts-ignore
import axios from 'axios';

async function getMediaDetails(id: number = 1, mediaType: MediaType = 'movie') {
  const res = await fetch(`${TMDB_URL}${mediaType}/${id}?append_to_response=credits`, TMDB_HEADERS);

  return await res.json();
}

export default getMediaDetails;
