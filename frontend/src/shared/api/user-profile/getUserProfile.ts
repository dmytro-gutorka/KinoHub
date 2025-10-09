import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { AxiosResponse } from 'axios';
import { IUserProfile } from '@features/profile/types';

export default async function getUserProfile(userId: number | undefined) {
  const url = apiPath.userProfile.getOneBy(userId);

  const response: AxiosResponse<IUserProfile> = await axiosWithAuth.get(url);
  return response?.data;
}
