import { RequestStatus, UserLoginCredentials } from '@features/auth/authTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { selectRequestError, selectRequestStatus } from '@features/auth/selectors';
import { useAppDispatch } from '@shared/hooks/redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '@features/auth/services/login';
import { setStateRequest } from '@features/auth/slice';

export default function useLoginForm(onClose?: (v: boolean) => void) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserLoginCredentials>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<UserLoginCredentials> = (data: UserLoginCredentials) =>
    dispatch(login(data));

  const loginStatus: RequestStatus = useSelector(selectRequestStatus('auth/login'));
  const loginServerError: string | null = useSelector(selectRequestError('auth/login'));

  useEffect(() => {
    if (loginStatus === 'success') {
      dispatch(setStateRequest('auth/login'));
      onClose?.(false);
    }
  }, [loginStatus, onClose, dispatch]);

  return {
    handleSubmit,
    control,
    errors,
    loginServerError,
    onSubmit,
  };
}
