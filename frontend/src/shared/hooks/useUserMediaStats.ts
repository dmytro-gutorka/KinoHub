import { MediaType, UserMediaStats } from '@shared/types/generalTypes';
import { IUser } from '@features/auth/authTypes';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/selectors';
import getUserStats from '@shared/api/user-stats/getUserStats';

// TODO add date preset
type Preset = 'all' | 'week' | 'month' | 'year';

export default function useUserMediaStats(datePreset: Preset, mediaType: MediaType | 'all') {
  const tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Europe/Kyiv';
  const userMeta: IUser | null = useSelector(selectUserMetaData);
  const userId = userMeta?.id;

  const queryKey = ['user-stats', userId, tz, mediaType, datePreset];

  return useQuery<UserMediaStats>({
    queryKey: queryKey,
    queryFn: (): Promise<UserMediaStats> => getUserStats(userId!, tz, datePreset, mediaType),
    staleTime: 0,
  });
}
