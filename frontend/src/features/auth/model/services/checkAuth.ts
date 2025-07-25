import { UserAuthData } from '@features/auth/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@shared/api/kinohub/apiPaths';
import { setAccessToken } from '@shared/helpers/localStorage/setAccessToken';

// @ts-ignore
import axios from 'axios';

export const checkAuth = createAsyncThunk('auth/checkAuth', async (): Promise<UserAuthData> => {
  try {
    const response = await axios.get<UserAuthData>(api.auth.refresh(), {
      withCredentials: true,
    });

    const accessToken: string = response?.data?.accessToken;
    setAccessToken(accessToken);

    return response?.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || error?.message || 'Something went wrong';
    throw new Error(message);
  }
});
