import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { MediaActions } from '@widgets/MediaDetailsPage/model/types';

async function createMediaAction(mediaId: number, mediaType: MediaType) {
  const response = await axiosWithAuth.post<MediaActions>(
    api.actions.createMediaAction(mediaId, mediaType)
  );

  return response?.data;
}

export default createMediaAction;
