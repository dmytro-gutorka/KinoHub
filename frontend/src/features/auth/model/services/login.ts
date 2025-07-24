import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthData, UserLoginCredentials } from '@features/auth/model/types';
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
    } catch (e) {
      const error = e as AxiosError<{ message: string }>;

      if (error.response && error.response.data?.message) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue('Something went wrong');
    }
  }
);
