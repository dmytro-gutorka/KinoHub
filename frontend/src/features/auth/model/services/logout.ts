import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios from 'axios';

export const logout = createAsyncThunk('auth/logout', async () => {
  const accessToken = localStorage.getItem('accessToken');

  await axios.post(
    `${API_URL}/${authEndpoints.LOGOUT}`,
    {},
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  localStorage.removeItem('accessToken');
});
