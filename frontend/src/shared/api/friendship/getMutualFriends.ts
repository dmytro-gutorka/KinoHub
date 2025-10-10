import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getMutualFriends() {
  const url = apiPath.friendships.getMutualFriends();
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
