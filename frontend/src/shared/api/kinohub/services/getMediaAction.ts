import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';

async function getMediaAction(movieId: number) {
  const response = await axiosWithAuth.get(api.actions.getMediaAction(movieId));

  return response?.data;
}

export default getMediaAction;
