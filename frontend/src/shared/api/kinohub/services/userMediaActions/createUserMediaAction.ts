import { axiosWithAuth } from '@shared/api/kinohub/kinohub-axios';
import { apiPath } from '@shared/api/kinohub/api-paths';
import { MediaType } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';

async function createUserMediaAction(mediaId: number, mediaType: MediaType) {
  const url: string = apiPath.userMediaActions.create(mediaId, mediaType);
  const response = await axiosWithAuth.post<UserMediaActionEntity>(url);

  return response?.data;
}

export default createUserMediaAction;
