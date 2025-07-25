import { RequestStatus } from '@shared/types/state/auth';

export interface User {
  id: number;
  email: string;
  username: string;
}

export type AuthRequestType = Record<string, { status: RequestStatus; error?: string | null }>;

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isEmailConfirmed: boolean;
  requests: AuthRequestType;
}

export interface UserLoginCredentials {
  email: string;
  password: string;
}

export interface UserRegisterCredentials {
  email: string;
  password: string;
  username: string;
}

export interface UserAuthData {
  data: User;
  accessToken: string;
}
