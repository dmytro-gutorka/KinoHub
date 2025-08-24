import DashboardMovieStats from '@features/dashboard/ui/DashboardMovieStats';
import { Stack, Typography } from '@mui/material';
import DashboardTopRatedMovies from '@features/dashboard/ui/DashboardTopRatedMovies';

export default function DashboardMoviesTab({ userMediaStats }) {
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
