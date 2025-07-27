import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';

async function updateMediaAction(mediaId: number, userAction: any) {
  const response = await axiosWithAuth.patch(api.actions.updateMediaAction(mediaId), userAction);

  return response?.data;
}

export default updateMediaAction;
