import { Button, Stack } from '@mui/material';
import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import useLoginForm from '@features/auth/model/hooks/useLoginForm';

export interface LoginFormProps {
  onClose?: (a: boolean) => void;
}

export default function LoginForm({ onClose }: LoginFormProps) {
  const { handleSubmit, control, errors, loginServerError, onSubmit } = useLoginForm(onClose);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4} m={2}>
      {loginServerError && <div>{loginServerError}</div>}

      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.email)}
            helperText={errors.email && 'Email field is required'}
            label="Email"
          />
        )}
      />

      <Controller
        name="password"
        defaultValue=""
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.password)}
            helperText={errors.password && 'Password field is required'}
            label="Password"
            type="password"
          />
        )}
      />

      <Button disabled={Object.keys(errors)?.length > 0} type="submit">
        Login
      </Button>
    </Stack>
  );
}
