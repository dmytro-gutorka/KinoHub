import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaDetails } from '@shared/types/generalTypes';

export async function getMedia(mediaId: number): Promise<MediaDetails> {
  const response = await axiosWithAuth.get<MediaDetails>(api.media.getMedia(mediaId));

  return response?.data;
}
