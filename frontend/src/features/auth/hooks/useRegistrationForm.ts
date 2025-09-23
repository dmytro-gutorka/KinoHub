import { RequestStatus, UserRegisterCredentials } from '@features/auth/authTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setStateRequest } from '@features/auth/slice';
import { selectRequestError, selectRequestStatus } from '@features/auth/selectors';
import { useAppDispatch } from '@shared/hooks/redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { register } from '@features/auth/services/register';

export default function useRegistrationForm(onClose?: () => void) {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<UserRegisterCredentials>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<UserRegisterCredentials> = (data: UserRegisterCredentials) =>
    dispatch(register(data));

  const registerStatus: RequestStatus = useSelector(selectRequestStatus('auth/register'));
  const registerServerError: string | null = useSelector(selectRequestError('auth/register'));

  useEffect(() => {
    if (registerStatus === 'success') {
      dispatch(setStateRequest('auth/register'));
      onClose?.();
    }
  }, [onClose, registerStatus, dispatch]);

  return {
    handleSubmit,
    control,
    errors,
    registerServerError,
    onSubmit,
  };
}
