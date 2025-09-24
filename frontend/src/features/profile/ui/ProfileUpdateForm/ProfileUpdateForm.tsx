import { Controller } from 'react-hook-form';
import { Button, Stack, TextField } from '@mui/material';
import useProfileUpdateForm from '@features/profile/hooks/useProfileUpdateForm';

export default function ProfileUpdateForm() {
  const { control, handleSubmit, onSubmit } = useProfileUpdateForm();

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <TextField {...field} label="First Name" />}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field }) => <TextField {...field} label="Last Name" />}
      />

      <Controller
        name="country"
        control={control}
        render={({ field }) => <TextField {...field} label="Country" />}
      />

      <Controller
        name="city"
        control={control}
        render={({ field }) => <TextField {...field} label="City" />}
      />

      <Controller
        name="birthDate"
        control={control}
        render={({ field }) => <TextField {...field} label="Birth date" />}
      />

      <Controller
        name="bio"
        control={control}
        render={({ field }) => <TextField {...field} label="Biography" multiline minRows={6} />}
      />

      <Button type="submit">Update profile</Button>
    </Stack>
  );
}
