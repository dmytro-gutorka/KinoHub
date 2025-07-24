import { RootState } from 'app/store';

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const selectLoginStatus = (type: string) => (state: RootState) =>
  state.auth.requests[type]?.status ?? 'idle';

export const selectLoginError = (type: string) => (state: RootState) =>
  state.auth.requests[type]?.error ?? null;
