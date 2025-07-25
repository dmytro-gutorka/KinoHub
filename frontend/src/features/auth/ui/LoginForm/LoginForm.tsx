import { Button, Stack } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { selectRequestError, selectRequestStatus } from '@features/auth/model/selectors';
import { useAppDispatch } from '@shared/hooks/redux';
import { login } from '@features/auth/model/services/login';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { RequestStatus } from '@shared/types/state/auth';

type Inputs = {
  email: string;
  password: string;
};

interface LoginFormProps {
  setOpenLoginModal: (a: boolean) => void;
}

const LoginForm = ({ setOpenLoginModal }: LoginFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => dispatch(login(data));
  const loginStatus: RequestStatus = useSelector(selectRequestStatus('auth/login'));
  const loginError: string | null = useSelector(selectRequestError('auth/login'));

  useEffect(() => {
    if (loginStatus === 'success') setOpenLoginModal(false);
  }, [loginStatus, setOpenLoginModal]);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      {loginError && <div>{loginError}</div>}
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

      <Button type="submit">Login</Button>
    </Stack>
  );
};

export default LoginForm;
