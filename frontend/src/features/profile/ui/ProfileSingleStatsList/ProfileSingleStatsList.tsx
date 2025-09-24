import { Stack } from '@mui/material';
import ProfileSingleStatCard from '@features/profile/ui/ProfileSingleStatCard';
import { UserMediaStats } from '@shared/types/generalTypes';

interface StatsCardProps {
  label: string;
  value: string | number;
}

interface ProfileSingleStatsListProps {
  data?: StatsCardProps[];
  userMediaStats: UserMediaStats;
}

export default function ProfileSingleStatsList({
  data,
  userMediaStats,
}: ProfileSingleStatsListProps) {
  const { watchedMovie, watchedTv, watchedEpisodes } = userMediaStats.userMediaAggregatedStats;

  const singleStats: StatsCardProps[] = [
    {
      label: 'Movies',
      value: watchedMovie,
    },
    {
      label: 'TV Shows',
      value: watchedTv,
    },
    {
      label: 'Episodes',
      value: watchedEpisodes,
    },
    // {
    //   label: 'Watch Time',
    //   value: '17d 20h',
    // },
    {
      label: 'Followers',
      value: 234,
    },
    {
      label: 'Following',
      value: 156,
    },
  ];

  const statsToRender: StatsCardProps[] = data ?? singleStats;

  return (
    <Stack gap={2} direction="row" justifyContent="space-between">
      {statsToRender.map(({ label, value }) => (
        <ProfileSingleStatCard key={label} label={label} value={value} />
      ))}
    </Stack>
  );
}
