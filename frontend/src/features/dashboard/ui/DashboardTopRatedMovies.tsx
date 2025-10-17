import BlockWrapper from '@shared/ui/BlockWrapper';
import DashboardTopRatedMovieCard from '@features/dashboard/ui/DashboardTopRatedMovieCard';
import { Stack } from '@mui/material';
import { UserMediaStats } from '@shared/types/generalTypes';

interface DashboardTopRatedMoviesProps {
  userMediaStats: UserMediaStats;
}

export default function DashboardTopRatedMovies({ userMediaStats }: DashboardTopRatedMoviesProps) {
  if (userMediaStats.topRatedMedia.length === 0)
    return (
      <div>Rate some movies</div>
      // TODO: Create a component
    );

  return (
    <BlockWrapper title="Top Rated Movies">
      <Stack direction="row" flexWrap="wrap" rowGap={10}>
        {userMediaStats.topRatedMedia.map((movieItem, index) => (
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
