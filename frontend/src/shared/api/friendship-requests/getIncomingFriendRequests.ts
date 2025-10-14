import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getIncomingFriendRequests(search: string, page: number) {
  const url = apiPath.friendshipRequests.getIncomingFriendRequests(search, page);
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
