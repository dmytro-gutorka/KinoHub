import { RequestStatus, UserRegisterCredentials } from '@features/auth/model/authTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { register } from '@features/auth/model/services/register';
import { useAppDispatch } from '@shared/hooks/redux';
import { useSelector } from 'react-redux';
import { selectRequestError, selectRequestStatus } from '@features/auth/model/selectors';
import { useEffect } from 'react';

export default function useRegistrationForm(setOpenRegistrationModal: (a: boolean) => void) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserRegisterCredentials>();

  const onSubmit: SubmitHandler<UserRegisterCredentials> = (data: UserRegisterCredentials) =>
    dispatch(register(data));

  const dispatch = useAppDispatch();
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
