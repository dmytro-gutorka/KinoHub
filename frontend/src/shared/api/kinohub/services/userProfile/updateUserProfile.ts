import { IUserProfile } from '@features/profile/types';
import { AxiosResponse } from 'axios';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { apiPath } from '@shared/api/kinohub/apiPaths';

export default async function updateUserProfile(
  userProfileFields: IUserProfile,
  userId: number | undefined
) {
  const url = apiPath.userProfile.update(userId);

  const response: AxiosResponse<IUserProfile> = await axiosWithAuth.patch(url, userProfileFields);
  return response?.data;
}
