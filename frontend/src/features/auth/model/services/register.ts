import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserRegisterCredentials } from '@features/auth/model/types';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios, { AxiosError } from 'axios';

export const register = createAsyncThunk<User, UserRegisterCredentials, { rejectValue: string }>(
  'auth/register',
  async (registrationData, { rejectWithValue }) => {
    try {
      const response = await axios.post<User>(
        `${API_URL}/${authEndpoints.REGISTER}`,
        registrationData
      );
      return response.data;
    } catch (err: AxiosError<{ message: string }>) {
      return rejectWithValue(err.response.data.message || 'Something went wrong');
    }
  }
);
