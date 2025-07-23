// @ts-ignore
import axios from 'axios';
import { API_URL } from '@app/constants';

export const authInstance = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}/auth`,
});

authInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
});

authInstance.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const accessToken = await authInstance.post('/refresh');
        localStorage.setItem('accessToken', accessToken?.data?.accessToken);

        // originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`; Is there any need it this?
        return authInstance.request(originalRequest);
      } catch (e) {
        console.log('Not authorized');
      }
    }
  }
);
