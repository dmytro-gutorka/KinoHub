import useUserProfile from '@features/profile/hooks/useUserProfile';
import { useForm } from 'react-hook-form';

export default function useProfileUpdateForm() {
  const { data: currentProfileInputValues } = useUserProfile();

  const { control, handleSubmit } = useForm({
    defaultValues: currentProfileInputValues,
  });

  return { control, handleSubmit };
}
