import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, authEndpoints } from '@app/constants';
import { axiosInstanceWithRefresh } from '@shared/api/axios/axiosInstanceWithRefresh';
import { removeAccessToken } from '@shared/helpers/localStorage/removeAccessToken';

export const logout = createAsyncThunk('auth/logout', async () => {
  await axiosInstanceWithRefresh.post(`${API_URL}/${authEndpoints.LOGOUT}`);

  removeAccessToken();
});
