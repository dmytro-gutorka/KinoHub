import { RequestStatus } from '@features/auth/model/types';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, Stack } from '@mui/material';
import { selectRequestError, selectRequestStatus } from '@features/auth/model/selectors';
import { useAppDispatch } from '@shared/hooks/redux';
import { register } from '@features/auth/model/services/register';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { setStateRequest } from '@features/auth/model/slice';

type Inputs = {
  email: string;
  username: string;
  password: string;
};

interface RegistrationFormProps {
  setOpenRegistrationModal: (a: boolean) => void;
}

const RegistrationForm = ({ setOpenRegistrationModal }: RegistrationFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => dispatch(register(data));

  const dispatch = useAppDispatch();
  const registerStatus: RequestStatus = useSelector(selectRequestStatus('auth/register'));
  const registerError: string | null = useSelector(selectRequestError('auth/register'));

  console.log(registerStatus);

  useEffect(() => {
    if (registerStatus === 'success') setOpenRegistrationModal(false);
  }, [setOpenRegistrationModal, registerStatus]);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      {registerError && <div>{registerError}</div>}

      <Controller
        name="username"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Username" sx={{ width: '350px' }} />}
      />
      {errors.username && <span>This field is required</span>}

      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Email" sx={{ width: '350px' }} />}
      />
      {errors.email && <span>This field is required</span>}

      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Password" sx={{ width: '350px' }} />}
      />
      {errors.password && <span>This field is required</span>}

      <Button type="submit">Register</Button>
    </Stack>
  );
};

export default RegistrationForm;
