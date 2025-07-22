import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserLoginCredentials } from '@features/auth/model/types';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (loginData: UserLoginCredentials) => {
  const res = await axios.post(`${API_URL}/${authEndpoints.LOGIN}`, loginData, {
    withCredentials: true,
  });

  localStorage.setItem('accessToken', res?.data?.accessToken);

  return res?.data;
});
