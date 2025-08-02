import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@shared/types/kinohubEntities';

async function createUserMediaAction(mediaId: number, mediaType: MediaType) {
  const url: string = getApiPaths.userMediaActions.post(mediaId, mediaType);
  const response = await axiosWithAuth.post<UserMediaActionEntity>(url);

  return response?.data;
}

export default createUserMediaAction;
