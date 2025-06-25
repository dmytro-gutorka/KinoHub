import { LOCALHOST_URL, USER_ID } from '../../../app/constants';

async function getMediaActions(movieId) {
  const res = await fetch(`${LOCALHOST_URL}movies/${movieId}/action?userid=${USER_ID}`)

  return await res.json();
}

export default getMediaActions