import { Stack } from '@mui/material';
import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import DashboardTopGenres from '@features/dashboard/ui/DashboardTopGenres';
import DashboardQuickStatsList from '@features/dashboard/ui/DashboardQuickStatsList';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';

export default function DashboardOverviewTab() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('year', 'all');

  if (!isSuccess) return null;

  return (
    <Stack spacing={10}>
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
  );
}
