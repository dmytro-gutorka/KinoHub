import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaDetails, MediaType } from '@shared/types/generalTypes';

export async function getMedia(mediaId: number, mediaType: MediaType): Promise<MediaDetails> {
  const response = await axiosWithAuth.get<MediaDetails>(api.media.getMedia(mediaId, mediaType));

  return response?.data;
}
