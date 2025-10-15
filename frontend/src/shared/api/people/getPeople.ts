import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { apiPath } from '@shared/api/api-paths';

export default async function getPeople(search: string, page: number) {
  const url: string = apiPath.people.getList(search, page);
  const response = await axiosWithAuth.get(url);

  return response?.data;
}
