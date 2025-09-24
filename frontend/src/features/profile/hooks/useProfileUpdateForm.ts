import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserProfile } from '@features/profile/types';
import { useModalContext } from '@shared/ui/Modal';
import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/selectors';
import updateUserProfile from '@shared/api/kinohub/services/userProfile/updateUserProfile';
import useUserProfile from '@features/profile/hooks/useUserProfile';

export default function useProfileUpdateForm() {
  const { data: currentProfileInputValues } = useUserProfile();
  const { closeModal } = useModalContext();
  const { control, handleSubmit } = useForm({
    defaultValues: currentProfileInputValues,
  });

  const userId: number | undefined = useSelector(selectUserMetaData)?.id;

  const onSubmit: SubmitHandler<IUserProfile> = async (userProfileFields: IUserProfile) => {
    await updateUserProfile(userProfileFields, userId);
    closeModal();
  };
  return { control, handleSubmit, onSubmit };
}
