import { AuthState, UserAuthData } from '@features/auth/model/types';
import { Action, createSlice, PayloadAction, UnknownAction } from '@reduxjs/toolkit';
import { login } from '@features/auth/model/services/login';
import { logout } from '@features/auth/model/services/logout';
import { checkAuth } from '@features/auth/model/services/checkAuth';
import { isAuthFulfilled, isAuthPending, isAuthRejected } from '@features/auth/model/matchers';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isEmailConfirmed: false,
  requests: {},
};

const getPrefixFromType = (type: string): string => {
  return type.split('/').slice(0, -1).join('/');
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(logout.fulfilled, (): AuthState => initialState);
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

    builder.addMatcher(isAuthPending, (state, action): void => {
      const prefix = getPrefixFromType(action.type);
      state.requests[prefix] = { status: 'loading', error: null };
    });
    builder.addMatcher(isAuthRejected, (state, action): void => {
      const prefix = getPrefixFromType(action.type);
      const error = action.payload ?? action.error.message ?? 'Unknown error';
      state.requests[prefix] = { status: 'error', error };
    });
    builder.addMatcher(isAuthFulfilled, (state, action): void => {
      const prefix = getPrefixFromType(action.type);
      state.requests[prefix] = { status: 'success', error: null };
    });
  },
});

const { reducer: authReducer, actions: authActions } = authSlice;
export const {} = authActions;

export default authReducer;
