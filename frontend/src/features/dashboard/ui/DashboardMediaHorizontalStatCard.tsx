import { ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';

interface DashboardMediaHorizontalStatCardProps {
  label: string;
  text: string | number | null;
  icon: ReactElement;
}

export default function DashboardMediaHorizontalStatCard({
  label,
  text,
  icon,
}: DashboardMediaHorizontalStatCardProps) {
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
