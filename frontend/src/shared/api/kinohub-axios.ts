import { UserAuthData } from '@features/auth/authTypes';
import { API_URL } from '@app/constants';
import { apiPath } from '@shared/api/api-paths';
import { setAccessToken } from '@shared/helpers/localStorage/setAccessToken';
import { getAccessToken } from '@shared/helpers/localStorage/getAccessToken';

import axios from 'axios';

export const axiosWithAuth = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosWithAuth.interceptors.request.use((config: any) => {
  const accessToken: string | null = getAccessToken();

  if (accessToken && config.headers) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (response: any): any => response,
  async (error): Promise<any> => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.get<UserAuthData>(apiPath.auth.refresh());
        const newAccessToken = response?.data?.accessToken;

        setAccessToken(newAccessToken);

        originalRequest.headers = {
          ...(originalRequest.headers || {}),
          Authorization: `Bearer ${newAccessToken}`,
        };
        return axiosWithAuth.request(originalRequest);
      } catch (refreshError) {
        console.log(`Refresh token failed ${refreshError}`);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
