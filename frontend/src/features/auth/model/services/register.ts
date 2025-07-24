import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterAxiosResponse, User, UserRegisterCredentials } from '@features/auth/model/types';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async (registrationData: UserRegisterCredentials): Promise<User> => {
    const response: RegisterAxiosResponse = await axios.post(
      `${API_URL}/${authEndpoints.REGISTER}`,
      registrationData
    );
    return response?.data;
  }
);
