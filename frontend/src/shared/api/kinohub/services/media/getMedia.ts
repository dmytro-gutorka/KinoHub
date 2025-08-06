import { MediaInfoEntity } from '@entities/types/kinohubEntities';
import { MediaType } from '@shared/types/generalTypes';
import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export async function getMedia(mediaId: number, mediaType: MediaType): Promise<MediaInfoEntity> {
  const url: string = apiPath.media.getOneBy(mediaId, mediaType);
  const response = await axiosWithAuth.get<MediaInfoEntity>(url);

  return response?.data;
}
