import { MediaInfoEntity } from '@entities/types/kinohubEntities';
import { MediaType } from '@shared/types/generalTypes';
import { apiPath } from '@shared/api/kinohub/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohub-axios';

export async function getMedia(mediaId: number, mediaType: MediaType): Promise<MediaInfoEntity> {
  const url: string = apiPath.media.getOneBy(mediaId, mediaType);
  const response = await axiosWithAuth.get<MediaInfoEntity>(url);

  return response?.data;
}
