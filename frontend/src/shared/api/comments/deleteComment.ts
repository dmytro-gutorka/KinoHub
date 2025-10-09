import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function deleteComment(commentId: number) {
  const url: string = apiPath.comments.delete(commentId);
  const response = await axiosWithAuth.delete(url);

  return response?.data;
}
