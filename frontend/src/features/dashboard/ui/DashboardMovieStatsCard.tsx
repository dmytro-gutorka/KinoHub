import BlockWrapper from '@shared/ui/BlockWrapper';
import { Stack, Typography } from '@mui/material';

export default function DashboardMovieStatsCard({ label, text, icon }) {
  return (
    <BlockWrapper>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
          <Typography variant="h5" fontWeight={600}>
            {label}
          </Typography>
          {icon}
        </Stack>
        <Typography variant="h4" fontWeight={900}>
          {text}
        </Typography>
      </Stack>
    </BlockWrapper>
  );
}
