import { useQuery } from '@tanstack/react-query';
import getUserProfile from '@shared/api/user-profile/getUserProfile';
import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/selectors';

export default function useUserProfile() {
  const userId: number | undefined = useSelector(selectUserMetaData)?.id;
  const queryKey = ['userProfile', userId];

  return useQuery({
    queryKey: queryKey,
    queryFn: () => getUserProfile(userId),
  });
}
