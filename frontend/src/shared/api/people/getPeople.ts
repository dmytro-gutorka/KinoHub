import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { apiPath } from '@shared/api/api-paths';


export default async function getPeople() {
  const url: string = apiPath.people.getList()
  const response = await axiosWithAuth.get(url);

  return response?.data;
}