import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { MediaInfoEntity } from '@entities/types/kinohubEntities';

export async function updateMedia(
  mediaId: number,
  mediaType: MediaType = 'movie'
): Promise<MediaInfoEntity> {
  const url: string = getApiPaths.media.put(mediaId, mediaType);
  const response = await axiosWithAuth.put<MediaInfoEntity>(url);

  return response?.data;
}
