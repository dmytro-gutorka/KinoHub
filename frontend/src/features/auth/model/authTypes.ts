export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';
export type AuthRequestType = Record<string, { status: RequestStatus; error?: string | null }>;

export interface IUser {
  id: number;
  email: string;
  username: string;
}

export interface AuthState {
  user: IUser | null;
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
  firstName: string;
  lastName: string;
}

export interface UserAuthData {
  data: IUser;
  accessToken: string;
}


export interface RegistrationFormProps {
  setOpenRegistrationModal: (a: boolean) => void;
}
