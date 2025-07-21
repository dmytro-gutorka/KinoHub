import { Input } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

type Inputs = {
  email: string;
  username: string;
  password: string;
  test: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      {errors.email && <span>This field is required</span>}

      <input {...register('username', { required: true })} />
      {errors.email && <span>This field is required</span>}

      <input {...register('password', { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />

      <Controller
        name="test"
        control={control}
        render={({ field }) => <Input sx={{ backgroundColor: 'red' }} {...field} />}
      />
    </form>
  );
};

export default SignUpForm;
