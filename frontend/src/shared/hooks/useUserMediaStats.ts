import { UserMediaStats } from '@shared/types/generalTypes';
import { IUser } from '@features/auth/authTypes';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/selectors';
import getUserStats from '@shared/api/user-stats/getUserStats';

// TODO add date preset
type Preset = 'all' | 'week' | 'month' | 'year';

export default function useUserMediaStats(datePreset: Preset) {
  const userMeta: IUser | null = useSelector(selectUserMetaData);
  const userId = userMeta?.id;

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Europe/Kyiv';

  return useQuery<UserMediaStats>({
    queryKey: ['userStats', userId, tz, datePreset],
    queryFn: (): Promise<UserMediaStats> => getUserStats(userId!, tz, datePreset),
    staleTime: 0,
  });
}
