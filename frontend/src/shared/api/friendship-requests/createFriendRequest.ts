import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function createFriendRequest() {
  const url = apiPath.friendshipRequests.createFriendRequest();
  const response = await axiosWithAuth.post(url);

  return response?.data;
}
