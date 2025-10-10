import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function cancelFriendRequest(friendRequestId: number) {
  const url = apiPath.friendshipRequests.cancelFriendRequest(friendRequestId);
  const response = await axiosWithAuth.post(url);

  return response?.data;
}
