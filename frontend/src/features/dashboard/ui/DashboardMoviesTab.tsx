import DashboardMovieStats from '@features/dashboard/ui/DashboardMovieStats';
import { Stack } from '@mui/material';
import DashboardTopRatedMovies from '@features/dashboard/ui/DashboardTopRatedMovies';

export default function DashboardMoviesTab({ userMediaStats }) {
  return (
    <Stack>
      <DashboardMovieStats userMediaStats={userMediaStats} />
      <DashboardTopRatedMovies userMediaStats={userMediaStats} />
    </Stack>
  );
}
