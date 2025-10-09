import { apiPath } from '@shared/api/kinohub/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohub-axios';
import { AxiosResponse } from 'axios';
import { ActivityFeedEntity } from '@entities/types/kinohubEntities';

export default async function getActivityLogList(page: number) {
  const url = apiPath.activity.getList(page);

  const response: AxiosResponse<ActivityFeedEntity[]> = await axiosWithAuth.get(url);
  return response?.data;
}
