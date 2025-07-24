// @ts-ignore
import { AxiosResponse } from 'axios';

export interface User {
  id: number;
  email: string;
  username: string;
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
