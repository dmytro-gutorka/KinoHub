import { MediaInfoEntity } from '@shared/types/kinohubEntities';
import { MediaType } from '@shared/types/generalTypes';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export async function getMedia(mediaId: number, mediaType: MediaType): Promise<MediaInfoEntity> {
  const url: string = getApiPaths.media.getOneBy(mediaId, mediaType);
  const response = await axiosWithAuth.get<MediaInfoEntity>(url);

  return response?.data;
}
