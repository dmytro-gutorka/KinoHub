import { AuthState, UserAuthData } from '@features/auth/model/types';
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { login } from '@features/auth/model/services/login';
import { logout } from '@features/auth/model/services/logout';
import { checkAuth } from '@features/auth/model/services/checkAuth';
import { isAuthFulfilled, isAuthPending, isAuthRejected } from '@features/auth/model/matchers';

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
  extraReducers: (builder): void => {
    builder.addCase(logout.fulfilled, () => initialState);
    builder.addCase(login.fulfilled, (state, action: PayloadAction<UserAuthData>): void => {
      state.isAuthenticated = true;
      state.user = action.payload.data;
    });
    builder.addCase(checkAuth.fulfilled, (state, action: PayloadAction<UserAuthData>): void => {
      state.isAuthenticated = true;
      state.user = action.payload.data;
    });
    builder.addCase(checkAuth.rejected, (state): void => {
      state.isAuthenticated = false;
    });

    builder.addMatcher(isAuthPending, (state): void => {
      state.isLoading = true;
    });
    builder.addMatcher(isAuthRejected, (state, action): void => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Unknown error';
    });
    builder.addMatcher(isAuthFulfilled, (state): void => {
      state.isLoading = false;
    });
  },
});

const { reducer: authReducer, actions: authActions } = authSlice;
export const {} = authActions;

export default authReducer;
