import { RootState } from '@app/store';

export const selectUserMetaData = (state: RootState) => state.auth.user;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const selectRequestStatus = (type: string) => (state: RootState) =>
  state.auth.requests[type]?.status ?? 'idle';

export const selectRequestError = (type: string) => (state: RootState) =>
  state.auth.requests[type]?.error ?? null;
