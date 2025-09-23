import { Button, Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import useRegistrationForm from '@features/auth/hooks/useRegistrationForm';

export interface RegistrationFormProps {
  onClose?: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const { handleSubmit, control, errors, registerServerError, onSubmit } =
    useRegistrationForm(onClose);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      {registerServerError && <div>{registerServerError}</div>}

      <Controller
        name="firstName"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="First name"
            helperText={errors.firstName && 'First name field is required'}
            error={Boolean(errors.firstName)}
          />
        )}
      />

      <Controller
        name="lastName"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            helperText={errors.lastName && 'Last name field is required'}
            error={Boolean(errors.lastName)}
            label="Last name"
          />
        )}
      />

      <Controller
        name="username"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Username"
            error={Boolean(errors.username)}
            helperText={errors.username && 'Username field is required'}
          />
        )}
      />

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
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.password)}
            helperText={errors.password && 'Password field is required'}
            type="password"
            label="Password"
          />
        )}
      />

      <Button disabled={Object.keys(errors)?.length > 0} type="submit">
        Register
      </Button>
    </Stack>
  );
};

export default RegistrationForm;
