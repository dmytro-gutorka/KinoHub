import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function deleteFriend(friendId: number) {
  const url = apiPath.friendships.deleteFriend(friendId);
  const response = await axiosWithAuth.delete(url);

  return response?.data;
}
