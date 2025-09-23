import { UserMediaStats } from '@shared/types/generalTypes';
import { IUser } from '@features/auth/authTypes';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/selectors';
import getUserStats from '@shared/api/kinohub/services/userStats/getUserStats';

export default function useUserMediaStats() {
  const userMeta: IUser | null = useSelector(selectUserMetaData);
  const userId = userMeta?.id;

  return useQuery<UserMediaStats>({
    queryKey: ['userStats', userId],
    queryFn: (): Promise<UserMediaStats> => getUserStats(userId),
    staleTime: 0,
  });
}
