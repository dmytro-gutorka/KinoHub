import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { AxiosResponse } from 'axios';
import { UserMediaStats } from '@shared/types/generalTypes';

export default async function getUserStats(userId: number | undefined): Promise<UserMediaStats> {
  const url: string = apiPath.userStats.getOneBy(userId);
  const response: AxiosResponse<UserMediaStats> = await axiosWithAuth.get(url);

  return response?.data as UserMediaStats
}
