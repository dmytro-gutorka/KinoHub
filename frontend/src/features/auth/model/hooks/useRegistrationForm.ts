import { RequestStatus, UserRegisterCredentials } from '@features/auth/model/authTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { selectRequestError, selectRequestStatus } from '@features/auth/model/selectors';
import { useAppDispatch } from '@shared/hooks/redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { register } from '@features/auth/model/services/register';

export default function useRegistrationForm(setOpenRegistrationModal: (a: boolean) => void) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserRegisterCredentials>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<UserRegisterCredentials> = (data: UserRegisterCredentials) =>
    dispatch(register(data));

  const registerStatus: RequestStatus = useSelector(selectRequestStatus('auth/register'));
  const registerServerError: string | null = useSelector(selectRequestError('auth/register'));

  useEffect(() => {
    if (registerStatus === 'success') setOpenRegistrationModal(false);
  }, [setOpenRegistrationModal, registerStatus]);

  return {
    handleSubmit,
    control,
    errors,
    registerServerError,
    onSubmit,
  };
}
