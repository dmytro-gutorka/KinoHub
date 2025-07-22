import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, authEndpoints } from '@app/constants';
// @ts-ignore
import axios from 'axios';

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.get(`${API_URL}/${authEndpoints.LOGIN}`);
});
