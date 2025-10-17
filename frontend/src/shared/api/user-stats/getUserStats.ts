import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { AxiosResponse } from 'axios';
import { MediaType, UserMediaStats } from '@shared/types/generalTypes';

export default async function getUserStats(
  userId: number,
  tz: string,
  datePreset: string,
  mediaType: MediaType | 'all'
): Promise<UserMediaStats> {
  const url: string = apiPath.userStats.getOneBy(userId, tz, datePreset, mediaType);
  const response: AxiosResponse<UserMediaStats> = await axiosWithAuth.get(url);

  return response?.data as UserMediaStats;
}
