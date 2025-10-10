import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function createFriendRequest(friendId: number) {
  const url = apiPath.friendshipRequests.createFriendRequest();
  const response = await axiosWithAuth.post(url, { friendId });

  return response?.data;
}
