import { createAsyncThunk } from '@reduxjs/toolkit';

// @ts-ignore
import axios from 'axios';
import { API_URL, authEndpoints } from '@app/constants';

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  try {
    const response = await axios.get(`${API_URL}/${authEndpoints.REFRESH}`, {
      withCredentials: true,
    });

    return response?.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || error?.message || 'Something went wrong';
    throw new Error(message);
  }
});
