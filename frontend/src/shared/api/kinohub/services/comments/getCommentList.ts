import { apiPath } from '@shared/api/kinohub/apiPaths';
import { MediaType } from '@shared/types/generalTypes';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export default async function getCommentList(mediaId: number, mediaType: MediaType) {
  const url: string = apiPath.comments.getList(mediaId, mediaType);
  const response = await axiosWithAuth.get<Array<unknown>>(url);

  return response?.data;
}
