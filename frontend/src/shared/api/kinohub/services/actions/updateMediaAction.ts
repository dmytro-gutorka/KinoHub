import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { MediaActions } from '@widgets/MediaDetailsPage/model/types';

async function updateMediaAction(mediaId: number, mediaType: MediaType, action: any) {
  const response = await axiosWithAuth.patch<MediaActions>(
    api.actions.updateMediaAction(mediaId, mediaType),
    action
  );

  return response?.data;
}

export default updateMediaAction;
