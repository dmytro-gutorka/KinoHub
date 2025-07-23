import { createAsyncThunk } from '@reduxjs/toolkit';

// @ts-ignore
import axios from 'axios';

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  try {
    const response = await axios.get('/auth/refresh', { withCredentials: true });
    console.log(1, response);
    return response?.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || error?.message || 'Something went wrong';
    throw new Error(message);
  }
});
