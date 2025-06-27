import { LOCALHOST_URL, USER_ID } from '../../app/constants';

async function updateMediaAction(mediaId, actionData, action) {
  const res = await fetch(`${LOCALHOST_URL}movies/${mediaId}/${action}?userid=${USER_ID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(actionData),
  });

  return await res.json();
}

export default updateMediaAction;
