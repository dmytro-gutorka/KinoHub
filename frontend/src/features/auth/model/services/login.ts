import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginAxiosResponse, UserAuthData, UserLoginCredentials } from '@features/auth/model/types';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: UserLoginCredentials): Promise<UserAuthData> => {
    try {
      const response: LoginAxiosResponse = await axios.post(
        `${API_URL}/${authEndpoints.LOGIN}`,
        loginData,
        { withCredentials: true }
      );

      localStorage.setItem('accessToken', response.data?.accessToken);

      return response?.data;
    } catch (error: any) {
      const errMessage = error?.response?.data?.message || error?.message || 'Something went wrong';
      throw new Error(errMessage);
    }
  }
);
