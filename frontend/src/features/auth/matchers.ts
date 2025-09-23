import { isAnyOf } from '@reduxjs/toolkit';
import { checkAuth } from '@features/auth/services/checkAuth';
import { login } from '@features/auth/services/login';
import { logout } from '@features/auth/services/logout';
import { register } from '@features/auth/services/register';

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
