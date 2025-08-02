import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@shared/types/kinohubEntities';

async function getUserMediaAction(mediaId: number, mediaType: MediaType) {
  const url: string = getApiPaths.userMediaActions.getOneBy(mediaId, mediaType);
  const response = await axiosWithAuth.get<UserMediaActionEntity>(url);

  return response?.data;
}

export default getUserMediaAction;
