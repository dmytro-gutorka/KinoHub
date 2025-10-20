import { TopRatedMedia } from '@shared/types/generalTypes';
import { Stack } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';
import DashboardTopRatedMovieCard from '@features/dashboard/ui/DashboardTopRatedMovieCard';

interface DashboardTopRatedMoviesProps {
  topRatedMedia: TopRatedMedia[];
}

export default function DashboardTopRatedMovies({ topRatedMedia }: DashboardTopRatedMoviesProps) {
  return (
    <BlockWrapper title="Top Rated Movies">
      <Stack direction="row" flexWrap="wrap" rowGap={10}>
        {topRatedMedia.map((mediaItem, index) => (
          <DashboardTopRatedMovieCard
            number={index + 1}
            mediaItem={mediaItem}
            key={mediaItem.posterPath}
          />
        ))}
      </Stack>
    </BlockWrapper>
  );
}
