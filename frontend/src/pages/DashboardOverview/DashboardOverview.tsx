import { Container, Stack, Typography } from '@mui/material';
import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import DashboardTopGenres from '@features/dashboard/ui/DashboardTopGenres';
import DashboardQuickStatsList from '@features/dashboard/ui/DashboardQuickStatsList';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';

export default function DashboardOverview() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('year', 'all');

  if (!isSuccess) return null;

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" fontWeight={900} mb={6}>
        Dashboard Overview
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
    </Container>
  );
}
