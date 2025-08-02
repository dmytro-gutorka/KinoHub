import { User, UserRegisterCredentials } from '@features/auth/model/authTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';

// @ts-ignore
import axios, { AxiosError } from 'axios';

export const register = createAsyncThunk<User, UserRegisterCredentials, { rejectValue: string }>(
  'auth/register',
  async (registrationData, { rejectWithValue }) => {
    try {
      const response = await axios.post<User>(getApiPaths.auth.register(), registrationData);
      return response.data;
    } catch (err: AxiosError<{ message: string }>) {
      return rejectWithValue(err.response.data.message || 'Something went wrong');
    }
  }
);
