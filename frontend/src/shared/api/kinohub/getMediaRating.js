import { CLIENT_URL } from '@app/constants';

async function getMediaRating(mediaId) {
  const res = await fetch(`${CLIENT_URL}movies/${mediaId}/rating?userid=1`);
  return await res.json();
}

export default getMediaRating;
