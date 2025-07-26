import { removeAccessToken } from '@shared/helpers/localStorage/removeAccessToken';
import { axiosInstanceWithRefresh } from '@shared/api/axios/axiosInstanceWithRefresh';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@shared/api/kinohub/apiPaths';

export const logout = createAsyncThunk('auth/logout', async () => {
  await axiosInstanceWithRefresh.post(api.auth.logout());

  removeAccessToken();
});
