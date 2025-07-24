// @ts-ignore
import { AxiosResponse } from 'axios';

export interface User {
  id: number;
  email: string;
  username: string;
}

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';
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

export type LoginAxiosResponse = AxiosResponse<UserAuthData>;
export type RegisterAxiosResponse = AxiosResponse<User>;
