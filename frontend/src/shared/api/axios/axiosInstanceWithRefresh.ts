// @ts-ignore
import axios, { AxiosError } from 'axios';
import { API_URL, AUTH_ENDPOINTS } from '@app/constants';
import { UserAuthData } from '@features/auth/model/types';
import { setAccessToken } from '@shared/helpers/localStorage/setAccessToken';
import { getAccessToken } from '@shared/helpers/localStorage/getAccessToken';

export const axiosInstanceWithRefresh = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}`,
});

axiosInstanceWithRefresh.interceptors.request.use((config: any) => {
  const token: string | null = getAccessToken();

  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosInstanceWithRefresh.interceptors.response.use(
  (response: any): any => response,
  async (error: AxiosError): Promise<any> => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.get<UserAuthData>(`${API_URL}/${AUTH_ENDPOINTS.REFRESH}`);
        const newAccessToken = response?.data?.accessToken;

        setAccessToken(newAccessToken);

        originalRequest.headers = {
          ...(originalRequest.headers || {}),
          Authorization: `Bearer ${newAccessToken}`,
        };
        return axiosInstanceWithRefresh.request(originalRequest);
      } catch (refreshError) {
        console.log(`Refresh token failed ${refreshError}`);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
