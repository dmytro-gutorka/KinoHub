import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getFriends() {
  const url = apiPath.friendships.getFriend();
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
