import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';

async function createMediaAction(mediaId: number, action: any) {
  const response = await axiosWithAuth.post(api.actions.createMediaAction(mediaId), action);

  return response?.data;
}

export default createMediaAction;
