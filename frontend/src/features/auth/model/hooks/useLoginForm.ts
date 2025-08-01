import { RequestStatus, UserLoginCredentials } from '@features/auth/model/authTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { selectRequestError, selectRequestStatus } from '@features/auth/model/selectors';
import { useAppDispatch } from '@shared/hooks/redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '@features/auth/model/services/login';

export default function useLoginForm(setOpenLoginModal: (a: boolean) => void) {
  const {
    handleSubmit,
    control,
    formState: { errors: validationErrors },
  } = useForm<UserLoginCredentials>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<UserLoginCredentials> = (data: UserLoginCredentials) =>
    dispatch(login(data));

  const loginStatus: RequestStatus = useSelector(selectRequestStatus('auth/login'));
  const loginServerError: string | null = useSelector(selectRequestError('auth/login'));

  useEffect(() => {
    if (loginStatus === 'success') setOpenLoginModal(false);
  }, [loginStatus, setOpenLoginModal]);

  return {
    handleSubmit,
    control,
    validationErrors,
    loginServerError,
    onSubmit,
  };
}
