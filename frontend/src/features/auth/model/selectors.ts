import { RootState } from '@app/store';
import { IUser } from '@features/auth/model/authTypes';

export const selectUserMetaData = (state: RootState): IUser| null => state.auth.user;

export const selectIsAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;

export const selectRequestStatus = (type: string) => (state: RootState) =>
  state.auth.requests[type]?.status ?? 'idle';

export const selectRequestError = (type: string) => (state: RootState) =>
  state.auth.requests[type]?.error ?? null;
