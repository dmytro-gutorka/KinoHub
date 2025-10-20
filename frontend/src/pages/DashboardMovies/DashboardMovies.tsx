import { Container, Stack, Typography } from '@mui/material';
import DashboardMediaStatsList from '@features/dashboard/ui/DashboardMediaStatsList';
import DashboardTopRatedMediaList from '@features/dashboard/ui/DashboardTopRatedMediaList';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import DashboardTopGenres from '@features/dashboard/ui/DashboardTopGenres';
import DashboardQuickStatsList from '@features/dashboard/ui/DashboardQuickStatsList';

export default function DashboardMovies() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('year', 'movie');

  if (!isSuccess) return null;

  return (
    <Container maxWidth="lg">
      <Stack spacing={6}>
        <Typography variant="h5" fontWeight={900}>
          Movie Statistics
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
        </Stack>

        <DashboardMediaStatsList
          aggregatedUserMediaStats={userMediaStats.aggregatedUserMediaStats}
        />
        <DashboardTopRatedMediaList topRatedMedia={userMediaStats.topRatedMedia} />
      </Stack>
    </Container>
  );
}
