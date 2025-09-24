import { removeAccessToken } from '@shared/helpers/localStorage/removeAccessToken';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';

export const logout = createAsyncThunk('auth/logout', async () => {
  const url = apiPath.auth.logout();
  await axiosWithAuth.post(url);

  removeAccessToken();
});
