import { Container, Stack, Typography } from '@mui/material';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import DashboardTvShowInProgressCard from '@features/dashboard/ui/DashboardTvShowInProgressCard';
import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import DashboardTopGenres from '@features/dashboard/ui/DashboardTopGenres';
import DashboardQuickStatsList from '@features/dashboard/ui/DashboardQuickStatsList';

export default function DashboardTvShows() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('year', 'tv');

  if (!isSuccess) return null;

  const { tvShowInProgress } = userMediaStats;

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" fontWeight={900} mb={6}>
        Tv Shows Statistics
      </Typography>

      <Stack gap={10}>
        <DashboardMainStats userMediaStats={userMediaStats} />
        <Stack
          direction={{ md: 'column-reverse', lg: 'row' }}
          justifyContent="space-between"
          spacing={3}
        >
          <DashboardTopGenres userMediaStats={userMediaStats} />
          <DashboardQuickStatsList userMediaStats={userMediaStats} />
        </Stack>

        <Stack>
          <Typography variant="h5" fontWeight={900} mb={6}>
            Tv Show in progress
          </Typography>
          <Stack direction="row" flexWrap="wrap" justifyContent="space-between" gap={4}>
            {tvShowInProgress.map((tvShowItem) => (
              <DashboardTvShowInProgressCard key={tvShowItem.tvShowId} tvShowItem={tvShowItem} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
