import { UserMediaStats } from '@shared/types/generalTypes';
import { Stack } from '@mui/material';
import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import DashboardTopGenres from '@features/dashboard/ui/DashboardTopGenres';
import DashboardQuickStats from '@features/dashboard/ui/DashboardQuickStats';

interface DashboardOverviewTabProps {
  userMediaStats: UserMediaStats
}

export default function DashboardOverviewTab({ userMediaStats }: DashboardOverviewTabProps) {
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
