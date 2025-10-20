import { Stack, Typography } from '@mui/material';
import DashboardTvShowInProgressCard from '@features/dashboard/ui/DashboardTvShowInProgressCard';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';

export default function DashboardTvShowsTab() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('year', 'tv');

  if (!isSuccess) return null;

  const { tvShowInProgress } = userMediaStats;

  return (
    <>
      <Typography variant="h5" fontWeight={900} mb={6}>
        TV Show Progress
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-between" gap={4}>
        {tvShowInProgress.map((tvShowItem) => (
          <DashboardTvShowInProgressCard key={tvShowItem.tvShowId} tvShowItem={tvShowItem} />
        ))}
      </Stack>
    </>
  );
}
