import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse, UserLoginCredentials } from '@features/auth/model/types';
import { API_URL, authEndpoints } from '@app/constants';

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: UserLoginCredentials): Promise<LoginResponse> => {
    try {
      const res: LoginResponse = await axios.post(`${API_URL}/${authEndpoints.LOGIN}`, loginData);

      localStorage.setItem('accessToken', res.data?.accessToken);

      return res?.data;
    } catch (error: any) {
      const errMessage = error?.response?.data?.message || error?.message || 'Something went wrong';
      throw new Error(errMessage);
    }
  }
);
