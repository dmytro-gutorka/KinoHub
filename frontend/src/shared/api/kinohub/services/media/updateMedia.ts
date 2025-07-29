import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { api } from '@shared/api/kinohub/apiPaths';
import { MediaDetails, MediaType } from '@shared/types/generalTypes';

export async function updateMedia(
  mediaId: number,
  mediaType: MediaType = 'movie'
): Promise<MediaDetails> {
  const response = await axiosWithAuth.put<MediaDetails>(api.media.updateMedia(mediaId, mediaType));

  return response?.data;
}
