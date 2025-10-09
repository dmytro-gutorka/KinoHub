import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function updateComment(commentId: number, review: string) {
  const url: string = apiPath.comments.update(commentId);

  const response = await axiosWithAuth.patch(url, { review });
  return response?.data;
}
