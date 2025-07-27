import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';

async function getMediaAction(mediaId: number) {
  const response = await axiosWithAuth.get(api.actions.getMediaAction(mediaId));

  return response?.data;
}

export default getMediaAction;
