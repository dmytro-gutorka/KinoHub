import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, authEndpoints } from '@app/constants';
import { authInstance } from '@shared/api/axios/authInstance';

export const logout = createAsyncThunk('auth/logout', async () => {
  await authInstance.post(`${API_URL}/${authEndpoints.LOGOUT}`);
  localStorage.removeItem('accessToken');
});
