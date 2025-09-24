import { IUser } from '@features/auth/authTypes';
import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/selectors';
import { useQuery } from '@tanstack/react-query';
import getUserProfile from '@shared/api/kinohub/services/userProfile/getUserProfile';

export default function useUserProfile() {
  const userMeta: IUser | null = useSelector(selectUserMetaData);
  const userId = userMeta?.id;

  const queryKey = ['userProfile', userId];

  return useQuery({
    queryKey: queryKey,
    queryFn: () => getUserProfile(userId),
  });
}
