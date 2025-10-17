import { Stack, Typography } from '@mui/material';
import DashboardMovieStats from '@features/dashboard/ui/DashboardMovieStats';
import DashboardTopRatedMovies from '@features/dashboard/ui/DashboardTopRatedMovies';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';

export default function DashboardMoviesTab() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('all', 'movie');

  if (!isSuccess) return null;

  console.log(userMediaStats);

  return (
    <Stack spacing={6}>
      <Typography variant="h5" fontWeight={900}>
        Movie Statistics
      </Typography>
      <DashboardMovieStats userMediaStats={userMediaStats} />
      <DashboardTopRatedMovies userMediaStats={userMediaStats} />
    </Stack>
  );
}
