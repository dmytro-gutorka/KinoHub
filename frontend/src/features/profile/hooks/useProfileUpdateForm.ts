import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserProfile } from '@features/profile/types';
import { useModalContext } from '@shared/ui/Modal';
import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/selectors';
import { useQueryClient } from '@tanstack/react-query';
import updateUserProfile from '@shared/api/user-profile/updateUserProfile';
import useUserProfile from '@features/profile/hooks/useUserProfile';

export default function useProfileUpdateForm() {
  const userId: number | undefined = useSelector(selectUserMetaData)?.id;
  const queryClient = useQueryClient();

  const { data: currentProfileInputValues } = useUserProfile();
  const { closeModal } = useModalContext();
  const { control, handleSubmit } = useForm({
    defaultValues: currentProfileInputValues,
  });

  const onSubmit: SubmitHandler<IUserProfile> = async (userProfileFields: IUserProfile) => {
    await updateUserProfile(userProfileFields, userId);
    await queryClient.invalidateQueries({ queryKey: ['userProfile', userId] });
    closeModal();
  };
  return { control, handleSubmit, onSubmit };
}
