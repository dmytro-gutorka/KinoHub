import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { MediaActionEntity } from '@shared/types/kinohubEntities';

async function updateMediaAction(
  mediaId: number,
  mediaType: MediaType,
  action: Partial<MediaUserActions>
) {
  const response = await axiosWithAuth.patch<MediaActionEntity>(
    api.actions.updateMediaAction(mediaId, mediaType),
    action
  );

  return response?.data;
}

export default updateMediaAction;
