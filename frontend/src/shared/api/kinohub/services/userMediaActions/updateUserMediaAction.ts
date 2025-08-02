import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@shared/types/kinohubEntities';

async function updateUserMediaAction(
  mediaId: number,
  mediaType: MediaType,
  action: Partial<MediaUserActions>
) {
  const url: string = getApiPaths.userMediaActions.patch(mediaId, mediaType);
  const response = await axiosWithAuth.patch<UserMediaActionEntity>(url, action);

  return response?.data;
}

export default updateUserMediaAction;
