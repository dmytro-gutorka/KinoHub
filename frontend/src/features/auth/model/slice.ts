import { AuthState } from '@features/auth/model/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { register } from '@features/auth/model/services/register';
import { login } from '@features/auth/model/services/login';
import { logout } from '@features/auth/model/services/logout';

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
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.error?.message;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.userData;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state = initialState;
      console.log(state);
    });
  },
});

const { reducer: authReducer, actions: authActions } = authSlice;
export const {} = authActions;

export default authReducer;
