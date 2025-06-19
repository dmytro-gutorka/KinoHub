import { LOCAL_URL, USER_ID } from '../../../config/constants';

async function getMediaActions(movieId) {
  const res = await fetch(`${LOCAL_URL}movies/${movieId}/action?userid=${USER_ID}`)

  return await res.json();
}

export default getMediaActions