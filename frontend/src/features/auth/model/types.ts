// @ts-ignore
import { AxiosResponse } from 'axios';

interface User {
  userId: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isEmailConfirmed: boolean;
  error: string | undefined;
}

export interface UserLoginCredentials {
  email: string;
  password: string;
}

export interface UserRegisterCredentials extends UserLoginCredentials {
  username: string;
}

export type LoginResponse = AxiosResponse<{ accessToken: string }>;
export type RegisterResponse = AxiosResponse<string>;
