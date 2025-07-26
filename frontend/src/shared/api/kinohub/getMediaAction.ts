import { CLIENT_URL } from '@app/constants';

async function getMediaAction(movieId: number) {
  const res = await fetch(`${CLIENT_URL}movies/${movieId}/action`);

  return await res.json();
}

export default getMediaAction;
