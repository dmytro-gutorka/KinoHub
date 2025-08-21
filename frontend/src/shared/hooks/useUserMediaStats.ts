import { UserMediaStats } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getUserStats from '@shared/api/kinohub/services/userStats/getUserStats';

export default function useUserMediaStats(userId: number) {
  return useQuery({
    queryKey: ['userStats', userId],
    queryFn: (): Promise<UserMediaStats> => getUserStats(userId),
    staleTime: 0,
  });
}
