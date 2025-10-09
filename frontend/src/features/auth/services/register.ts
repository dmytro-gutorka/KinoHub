import { IUser, UserRegisterCredentials } from '@features/auth/authTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiPath } from '@shared/api/kinohub/api-paths';
import axios, { AxiosError } from 'axios';

export const register = createAsyncThunk<IUser, UserRegisterCredentials, { rejectValue: string }>(
  'auth/register',
  async (registrationData, { rejectWithValue }) => {
    try {
      const response = await axios.post<IUser>(apiPath.auth.register(), registrationData);
      return response.data;
    } catch (err: AxiosError<{ message: string }>) {
      return rejectWithValue(err.response.data.message || 'Something went wrong');
    }
  }
);
