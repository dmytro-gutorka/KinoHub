import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';

export default async function getFriends(search: string, page?: number) {
  const url = apiPath.friendships.getFriends(search, page);
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
