import { createAsyncThunk } from '@reduxjs/toolkit';

// @ts-ignore
import axios, { AxiosResponse } from 'axios';
import { API_URL, authEndpoints } from '@app/constants';
import { UserAuthData } from '@features/auth/model/types';

export const checkAuth = createAsyncThunk('auth/checkAuth', async (): Promise<UserAuthData> => {
  try {
    const response: AxiosResponse<UserAuthData> = await axios.get(
      `${API_URL}/${authEndpoints.REFRESH}`,
      {
        withCredentials: true,
      }
    );

    return response?.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || error?.message || 'Something went wrong';
    throw new Error(message);
  }
});
