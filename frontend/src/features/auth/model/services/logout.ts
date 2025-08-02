import { removeAccessToken } from '@shared/helpers/localStorage/removeAccessToken';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export const logout = createAsyncThunk('auth/logout', async () => {
  await axiosWithAuth.post(getApiPaths.auth.logout());

  removeAccessToken();
});
