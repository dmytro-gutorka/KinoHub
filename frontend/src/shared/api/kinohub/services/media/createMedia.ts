import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { apiPath } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { MediaInfoEntity } from '@entities/types/kinohubEntities';

export async function createMedia(
  mediaId: number,
  mediaType: MediaType = 'movie'
): Promise<MediaInfoEntity> {
  const url: string = apiPath.media.post(mediaId, mediaType);
  const response = await axiosWithAuth.post<MediaInfoEntity>(url);

  return response?.data;
}
