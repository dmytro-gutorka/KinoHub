import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import DashboardTopGenres from '@features/dashboard/ui/DashboardTopGenres';
import DashboardQuickStats from '@features/dashboard/ui/DashboardQuickStats';
import { Stack } from '@mui/material';

export default function DashboardOverviewTab({ userMediaStats }) {
  return (
    <Stack spacing={10}>
      <DashboardMainStats userMediaStats={userMediaStats} />
      <Stack
        direction={{ md: 'column-reverse', lg: 'row' }}
        justifyContent="space-between"
        spacing={3}
      >
        <DashboardTopGenres userMediaStats={userMediaStats} />
        <DashboardQuickStats userMediaStats={userMediaStats} />
      </Stack>
    </Stack>
  );
}
