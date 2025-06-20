import { LOCAL_URL, USER_ID } from '../../../config/constants';

async function updateMediaAction(movieId, actionData, action) {
  const res = await fetch(`${LOCAL_URL}movies/${movieId}/${action}?userid=${USER_ID}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(actionData),
  })

  return await res.json();
}

export default updateMediaAction