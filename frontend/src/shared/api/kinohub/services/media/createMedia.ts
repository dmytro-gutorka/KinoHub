import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaDetails, MediaType } from '@shared/types/generalTypes';

export async function createMedia(mediaId: number, mediaType: MediaType): Promise<MediaDetails> {
  const response = await axiosWithAuth.post<MediaDetails>(
    api.media.createMedia(mediaId, mediaType)
  );

  return response?.data;
}
