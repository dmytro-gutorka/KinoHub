import { MediaType } from '@shared/types/generalTypes';
import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export default async function createComment(
  mediaId: number,
  mediaType: MediaType,
  review: string,
  parentId?: number
) {
  const url: string = apiPath.comments.create(mediaId, mediaType, parentId);
  const response = await axiosWithAuth.post(url, { review });

  return response?.data;
}
