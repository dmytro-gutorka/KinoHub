import { Stack, Typography } from '@mui/material';
import DashboardMediaStatsList from '@features/dashboard/ui/DashboardMediaStatsList';
import DashboardTopRatedMediaList from '@features/dashboard/ui/DashboardTopRatedMediaList';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';

export default function DashboardMoviesTab() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('all', 'movie');

  if (!isSuccess) return null;

  return (
    <Stack spacing={6}>
      <Typography variant="h5" fontWeight={900}>
        Movie Statistics
      </Typography>
      <DashboardMediaStatsList aggregatedUserMediaStats={userMediaStats.aggregatedUserMediaStats} />
      <DashboardTopRatedMediaList topRatedMedia={userMediaStats.topRatedMedia} />
    </Stack>
  );
}
