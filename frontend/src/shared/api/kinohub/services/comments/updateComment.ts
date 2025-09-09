import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export default async function updateComment(commentId: number, review: string) {
  const url: string = apiPath.comments.update(commentId);

  const response = await axiosWithAuth.patch(url, { review });
  return response?.data;
}
