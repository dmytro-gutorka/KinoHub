import { isAuthFulfilled, isAuthPending, isAuthRejected } from '@features/auth/matchers';
import { AuthState, UserAuthData } from '@features/auth/authTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuth } from '@features/auth/services/checkAuth';
import { logout } from '@features/auth/services/logout';
import { login } from '@features/auth/services/login';

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
  reducers: {
    setStateRequest: (state, action: PayloadAction<string>): void => {
      state.requests[action.payload] = { status: 'idle', error: null };
    },
  },
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
      const error: string = action.payload ?? action.error.message ?? 'Unknown error';
      state.requests[prefix] = { status: 'error', error };
    });
    builder.addMatcher(isAuthFulfilled, (state, action): void => {
      const prefix = getPrefixFromType(action.type);
      state.requests[prefix] = { status: 'success', error: null };
    });
  },
});

const { reducer: authReducer, actions: authActions } = authSlice;

export const { setStateRequest } = authActions;

export default authReducer;
