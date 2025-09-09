import { Button, Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import useLoginForm from '@features/auth/model/hooks/useLoginForm';

export interface LoginFormProps {
  onClose?: (a: boolean) => void;
}

export default function LoginForm({ onClose }: LoginFormProps) {
  const { handleSubmit, control, errors, loginServerError, onSubmit } = useLoginForm(onClose);

  const isErrors: boolean = Object.keys(errors).length > 0;

  const emailRules = {
    required: { value: true, message: 'Email field is required' },
    minLength: { value: 5, message: 'At least 5 characters' },
    maxLength: { value: 50, message: 'No more than 50 characters' },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address. Example: <example@example.example>',
    },
  };

  const passwordRules = {
    required: { value: true, message: 'Password field is required' },
    minLength: { value: 8, message: 'At least 8 characters' },
    maxLength: { value: 50, message: 'No more than 50 characters' },
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4} m={2}>
      {loginServerError && <div>{loginServerError}</div>}
      {/*Replace with a toast*/}
      <Controller
        name="email"
        // rules={emailRules}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.email?.message)}
            helperText={errors.email && errors.email.message}
            label="Email"
          />
        )}
      />
      <Controller
        name="password"
        defaultValue=""
        // rules={passwordRules}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.password?.message)}
            helperText={errors.password && errors.password.message}
            label="Password"
            type="password"
          />
        )}
      />
      <Button disabled={isErrors} type="submit">
        Login
      </Button>
    </Stack>
  );
}
