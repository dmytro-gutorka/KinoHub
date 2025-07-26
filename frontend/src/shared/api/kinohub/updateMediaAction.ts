import { CLIENT_URL } from '@app/constants';
import { MediaAction } from '@shared/types/generalTypes';

async function updateMediaAction(mediaId: number, action: MediaAction, actionData: any) {
  const res = await fetch(`${CLIENT_URL}movies/${mediaId}/${action}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(actionData),
  });

  return await res.json();
}

export default updateMediaAction;
