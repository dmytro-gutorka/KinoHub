import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaDetails } from '@shared/types/generalTypes';

export async function updateMedia(mediaId: number): Promise<MediaDetails> {
  const response = await axiosWithAuth.put<MediaDetails>(api.media.updateMedia(mediaId));

  return response?.data;
}
