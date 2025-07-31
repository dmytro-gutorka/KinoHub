import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { MediaActionEntity } from '@shared/types/kinohubEntities';

async function createMediaAction(mediaId: number, mediaType: MediaType) {
  const response = await axiosWithAuth.post<MediaActionEntity>(
    api.actions.createMediaAction(mediaId, mediaType)
  );

  return response?.data;
}

export default createMediaAction;
