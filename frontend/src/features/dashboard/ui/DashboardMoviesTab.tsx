import DashboardMovieStats from '@features/dashboard/ui/DashboardMovieStats';
import { Stack } from '@mui/material';
import DashboardTopRatedMovies from '@features/dashboard/ui/DashboardTopRatedMovies';

export default function DashboardMoviesTab({ userMediaStats }) {
  return (
    <Stack spacing={10}>
      <DashboardMovieStats userMediaStats={userMediaStats} />
      <DashboardTopRatedMovies userMediaStats={userMediaStats} />
    </Stack>
  );
}
