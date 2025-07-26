import { CLIENT_URL } from '@app/constants';

async function createMediaActions(mediaId: number, action: any) {
  const res = await fetch(`${CLIENT_URL}movies/${mediaId}/action`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action),
  });

  return await res.json();
}

export default createMediaActions;
