import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterResponse, UserRegisterCredentials } from '@features/auth/model/types';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async (registrationData: UserRegisterCredentials): Promise<RegisterResponse> => {
    const response: RegisterResponse = await axios.post(
      `${API_URL}/${authEndpoints.REGISTER}`,
      registrationData
    );
    return response?.data;
  }
);
