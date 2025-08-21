import BlockWrapper from '@shared/ui/BlockWrapper';
import DashboardTopRatedMovieCard from '@features/dashboard/ui/DashboardTopRatedMovieCard';
import { Stack } from '@mui/material';

export default function DashboardTopRatedMovies({ userMediaStats }) {
  if (userMediaStats.topRatedMovie.length === 0)
    return (
      <div>Rate some movies</div>
      // TODO: Create a component
    );

  return (
    <BlockWrapper blockTitle="Top Rated Movies">
      <Stack direction="row" flexWrap="wrap" rowGap={10}>
        {userMediaStats.topRatedMovie.map((movieItem, index) => (
          <DashboardTopRatedMovieCard
            number={index + 1}
            movieItem={movieItem}
            key={movieItem.posterPath}
          />
        ))}
      </Stack>
    </BlockWrapper>
  );
}
