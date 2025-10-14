import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getOutcomingFriendRequests(search: string = '', page: number = 1) {
  const url = apiPath.friendshipRequests.getOutcomingFriendRequests(search, page);
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
