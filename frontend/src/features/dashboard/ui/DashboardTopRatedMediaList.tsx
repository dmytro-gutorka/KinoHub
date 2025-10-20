import { TopRatedMedia } from '@shared/types/generalTypes';
import { Stack } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';
import DashboardTopRatedMediaCard from '@features/dashboard/ui/DashboardTopRatedMediaCard';

interface DashboardTopRatedMediaListProps {
  topRatedMedia: TopRatedMedia[];
}

export default function DashboardTopRatedMediaList({
  topRatedMedia,
}: DashboardTopRatedMediaListProps) {
  return (
    <BlockWrapper title="Top Rated Movies">
      <Stack direction="row" flexWrap="wrap" rowGap={10}>
        {topRatedMedia.map((mediaItem, index) => (
          <DashboardTopRatedMediaCard
            number={index + 1}
            mediaItem={mediaItem}
            key={mediaItem.posterPath}
          />
        ))}
      </Stack>
    </BlockWrapper>
  );
}
