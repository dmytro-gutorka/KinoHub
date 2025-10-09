import { apiPath } from '@shared/api/api-paths';
import { MediaType } from '@shared/types/generalTypes';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getCommentList(mediaId: number, mediaType: MediaType) {
  const url: string = apiPath.comments.getList(mediaId, mediaType);
  const response = await axiosWithAuth.get<Array<unknown>>(url);

  return response?.data;
}
