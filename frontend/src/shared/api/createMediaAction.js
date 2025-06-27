import { LOCALHOST_URL, USER_ID } from '../../app/constants';

async function createMediaActions(mediaId, actionData, isBulk = false) {
  const res = await fetch(`${LOCALHOST_URL}movies/${mediaId}/action${isBulk ? '/bulk' : ''}?userid=${USER_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(actionData),
  });

  return await res.json();
}

export default createMediaActions;
