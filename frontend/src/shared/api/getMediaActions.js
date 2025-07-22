import { CLIENT_URL, USER_ID } from '@app/constants';

async function getMediaActions(movieId) {
  const res = await fetch(`${CLIENT_URL}movies/${movieId}/action?userid=${USER_ID}`);

  return await res.json();
}

export default getMediaActions;
