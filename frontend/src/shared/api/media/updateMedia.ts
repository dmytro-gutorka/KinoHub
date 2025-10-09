import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { apiPath } from '@shared/api/api-paths';
import { MediaType } from '@shared/types/generalTypes';
import { MediaInfoEntity } from '@entities/types/kinohubEntities';

export async function updateMedia(
  mediaId: number,
  mediaType: MediaType = 'movie'
): Promise<MediaInfoEntity> {
  const url: string = apiPath.media.put(mediaId, mediaType);
  const response = await axiosWithAuth.put<MediaInfoEntity>(url);

  return response?.data;
}
