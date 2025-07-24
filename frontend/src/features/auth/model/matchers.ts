import { isAnyOf } from '@reduxjs/toolkit';
import { login } from '@features/auth/model/services/login';
import { checkAuth } from '@features/auth/model/services/checkAuth';
import { logout } from '@features/auth/model/services/logout';

export const isAuthPending = isAnyOf(login.pending, checkAuth.pending, logout.pending);
export const isAuthRejected = isAnyOf(login.rejected, checkAuth.rejected, logout.rejected);
export const isAuthFulfilled = isAnyOf(login.fulfilled, checkAuth.fulfilled, logout.fulfilled);
