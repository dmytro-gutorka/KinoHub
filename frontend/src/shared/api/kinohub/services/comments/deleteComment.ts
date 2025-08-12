import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export default async function deleteComment(commentId: number) {
  const url: string = apiPath.comments.delete(commentId);
  const response = await axiosWithAuth.delete(url);

  return response?.data;
}
