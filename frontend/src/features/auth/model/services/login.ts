import { UserAuthData, UserLoginCredentials } from '@features/auth/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAccessToken } from '@shared/helpers/localStorage/setAccessToken';

// @ts-ignore
import axios, { AxiosError } from 'axios';
import { api } from '@shared/api/kinohub/apiPaths';

export const login = createAsyncThunk<UserAuthData, UserLoginCredentials, { rejectValue: string }>(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(api.auth.login(), loginData, {
        withCredentials: true,
      });

      const accessToken: string = response?.data?.accessToken;
      setAccessToken(accessToken);

      return response?.data;
    } catch (err: AxiosError<{ message: string }>) {
      return rejectWithValue(err.response.data.message || 'Something went wrong');
    }
  }
);
