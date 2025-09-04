import { RegistrationFormProps } from '@features/auth/model/authTypes';
import { Button, Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import useRegistrationForm from '@features/auth/model/hooks/useRegistrationForm';

const RegistrationForm = ({ setOpenRegistrationModal }: RegistrationFormProps) => {
  const { handleSubmit, control, errors, registerServerError, onSubmit } =
    useRegistrationForm(setOpenRegistrationModal);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      {registerServerError && <div>{registerServerError}</div>}

      <Controller
        name="firstName"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField {...field} label="First name" />}
      />
      {errors.firstName && <span>This field is required</span>}

      <Controller
        name="lastName"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField {...field} label="Last name"  />}
      />
      {errors.lastName && <span>This field is required</span>}

      <Controller
        name="username"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField {...field} label="Username"  />}
      />
      {errors.username && <span>This field is required</span>}

      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField {...field} label="Email"  />}
      />
      {errors.email && <span>This field is required</span>}

      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField {...field} type="password" label="Password"  />}
      />
      {errors.password && <span>This field is required</span>}

      <Button type="submit">Register</Button>
    </Stack>
  );
};

export default RegistrationForm;
