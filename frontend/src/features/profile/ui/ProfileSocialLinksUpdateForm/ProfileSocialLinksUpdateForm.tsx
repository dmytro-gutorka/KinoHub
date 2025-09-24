import { Controller } from 'react-hook-form';
import useProfileUpdateForm from '@features/profile/hooks/useProfileUpdateForm';
import { Button, Stack, TextField } from '@mui/material';

export default function ProfileSocialLinksUpdateForm() {
  const { control, onSubmit, handleSubmit } = useProfileUpdateForm();

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      <Controller
        name="social.website"
        control={control}
        render={({ field }) => <TextField {...field} label="Website" />}
      />

      <Controller
        name="social.linkedin"
        control={control}
        render={({ field }) => <TextField {...field} label="Linkedin" />}
      />

      <Controller
        name="social.instagram"
        control={control}
        render={({ field }) => <TextField {...field} label="Instagram" />}
      />

      <Controller
        name="social.telegram"
        control={control}
        render={({ field }) => <TextField {...field} label="Telegram" />}
      />

      <Button type="submit">Update Social Links</Button>
    </Stack>
  );
}
