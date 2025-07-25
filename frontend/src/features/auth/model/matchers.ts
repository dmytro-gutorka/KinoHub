import { isAnyOf } from '@reduxjs/toolkit';
import { checkAuth } from '@features/auth/model/services/checkAuth';
import { login } from '@features/auth/model/services/login';
import { logout } from '@features/auth/model/services/logout';
import { register } from '@features/auth/model/services/register';

export const isAuthPending = isAnyOf(
  login.pending,
  checkAuth.pending,
  logout.pending,
  register.pending
);
export const isAuthRejected = isAnyOf(
  login.rejected,
  checkAuth.rejected,
  logout.rejected,
  register.rejected
);
export const isAuthFulfilled = isAnyOf(
  login.fulfilled,
  checkAuth.fulfilled,
  logout.fulfilled,
  register.fulfilled
);
