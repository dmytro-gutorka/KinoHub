import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getIncomingFriendRequests() {
  const url = apiPath.friendshipRequests.getIncomingFriendRequests();
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
