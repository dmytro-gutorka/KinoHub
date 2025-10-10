import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getOutcomingFriendRequests() {
  const url = apiPath.friendshipRequests.getOutcomingFriendRequests();
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
