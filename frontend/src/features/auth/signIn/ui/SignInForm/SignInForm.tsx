import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
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

export default SignInForm;
