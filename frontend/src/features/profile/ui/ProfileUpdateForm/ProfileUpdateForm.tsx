import { SubmitHandler, Controller } from 'react-hook-form';
import { IUserProfile } from '@features/profile/types';
import { IUser } from '@features/auth/authTypes';
import { Button, Stack, TextField } from '@mui/material';
import { selectUserMetaData } from '@features/auth/selectors';
import { useSelector } from 'react-redux';
import { useModalContext } from '@shared/ui/Modal';
import useProfileUpdateForm from '@features/profile/hooks/useProfileUpdateForm';
import updateUserProfile from '@shared/api/kinohub/services/userProfile/updateUserProfile';

export default function ProfileUpdateForm() {
  const { control, handleSubmit } = useProfileUpdateForm();
  const { closeModal } = useModalContext();

  const userMeta: IUser | null = useSelector(selectUserMetaData);
  const userId: number | undefined = userMeta?.id;

  const onSubmit: SubmitHandler<IUserProfile> = async (userProfileFields: IUserProfile) => {
    await updateUserProfile(userProfileFields, userId);
    closeModal();
  };

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
