import { axiosWithAuth } from '@shared/api/kinohub/kinohub-axios';
import { apiPath } from '@shared/api/kinohub/api-paths';
import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';

async function updateUserMediaAction(
  mediaId: number,
  mediaType: MediaType,
  action: Partial<MediaUserActions>
) {
  const url: string = apiPath.userMediaActions.update(mediaId, mediaType);
  const response = await axiosWithAuth.patch<UserMediaActionEntity>(url, action);

  return response?.data;
}

export default updateUserMediaAction;
