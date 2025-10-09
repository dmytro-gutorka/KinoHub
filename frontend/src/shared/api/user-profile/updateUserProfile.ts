import { IUserProfile } from '@features/profile/types';
import { AxiosResponse } from 'axios';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { apiPath } from '@shared/api/api-paths';

export default async function updateUserProfile(
  userProfileFields: IUserProfile,
  userId: number | undefined
) {
  const url = apiPath.userProfile.update(userId);

  const response: AxiosResponse<IUserProfile> = await axiosWithAuth.patch(url, userProfileFields);
  return response?.data;
}
