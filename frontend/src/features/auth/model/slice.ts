import { AuthState } from '@features/auth/model/types';
import { createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit';
import { login } from '@features/auth/model/services/login';
import { logout } from '@features/auth/model/services/logout';
import { checkAuth } from '@features/auth/model/services/checkAuth';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isEmailConfirmed: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, () => initialState);
    builder.addCase(login.fulfilled, (state, action): void => {
      state.isAuthenticated = true;
      state.user = action.payload.data;
    });
    builder.addCase(checkAuth.fulfilled, (state, action): void => {
      state.isAuthenticated = true;
      state.user = action.payload.data;
    });
    builder.addCase(checkAuth.rejected, (state, action): void => {
      state.isAuthenticated = false;
    });

    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isRejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Unknown error';
      console.log(1111);
    });
    builder.addMatcher(isFulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

const { reducer: authReducer, actions: authActions } = authSlice;
export const {} = authActions;

export default authReducer;
