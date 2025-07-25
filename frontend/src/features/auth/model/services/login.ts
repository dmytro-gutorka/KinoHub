import { UserAuthData, UserLoginCredentials } from '@features/auth/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios, { AxiosError } from 'axios';
import { setAccessToken } from '@shared/helpers/localStorage/setAccessToken';

export const login = createAsyncThunk<UserAuthData, UserLoginCredentials, { rejectValue: string }>(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/${authEndpoints.LOGIN}`, loginData, {
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
