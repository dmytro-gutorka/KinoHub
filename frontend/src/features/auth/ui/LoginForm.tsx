import { Button, Stack } from '@mui/material';
import { LoginFormProps } from '@features/auth/model/authTypes';
import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import useLoginForm from '@features/auth/model/hooks/useLoginForm';

const LoginForm = ({ setOpenLoginModal }: LoginFormProps) => {
  const { handleSubmit, control, validationErrors, loginServerError, onSubmit } =
    useLoginForm(setOpenLoginModal);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      {loginServerError && <div>{loginServerError}</div>}

      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Email" sx={{ width: '350px' }} />}
      />
      {validationErrors.email && <span>This field is required</span>}

      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Password" sx={{ width: '350px' }} />}
      />
      {validationErrors.password && <span>This field is required</span>}

      <Button type="submit">Login</Button>
    </Stack>
  );
};

export default LoginForm;
