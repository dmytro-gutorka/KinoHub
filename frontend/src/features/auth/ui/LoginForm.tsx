import { Button, Stack } from '@mui/material';
import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import useLoginForm from '@features/auth/model/hooks/useLoginForm'


export interface LoginFormProps {
  onClose?: (a: boolean) => void;
}

export default function LoginForm ({ onClose }: LoginFormProps) {
  const { handleSubmit, control, validationErrors, loginServerError, onSubmit } =
    useLoginForm(onClose);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4} m={2}>
      {loginServerError && <div>{loginServerError}</div>}

      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField {...field} label="Email" />}
      />
      {validationErrors.email && <span>This field is required</span>}

      <Controller
        name="password"
        defaultValue=""
        rules={{ required: true }}
        control={control}
        render={({ field }) =>
          <TextField {...field} label="Password" type="password" />}
      />
      {validationErrors.password && <span>This field is required</span>}

      <Button type="submit">Login</Button>
    </Stack>
  );
};
