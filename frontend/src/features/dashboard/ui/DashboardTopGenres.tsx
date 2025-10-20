import { UserMediaStats } from '@shared/types/generalTypes';
import { Stack, Typography } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';

interface DashboardTopGenresProps {
  userMediaStats: UserMediaStats;
}

export default function DashboardTopGenres({ userMediaStats }: DashboardTopGenresProps) {
  return (
    <BlockWrapper title="Top Genres">
      <Stack px={4} py={5} gap={4}>
        {userMediaStats.favoriteGenres.map(({ name, count }, index) => (
          <Stack>
            <Typography variant="h6" fontWeight={900}>
              {index + 1}. {name}
            </Typography>
            <Typography variant="subtitle2" color="white">
              Watched {count} Movies and TV Shows
            </Typography>
          </Stack>
        ))}
      </Stack>
    </BlockWrapper>
  );
}
