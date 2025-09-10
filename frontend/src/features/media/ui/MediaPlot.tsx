import { MediaPlotProps } from '@features/media/model/types/mediaTypes';
import { Box } from '@mui/material';
import { ReactNode } from 'react';

function MediaContentBlock(props: {
  blockTitle: string;
  isBoxShadow: boolean;
  children: ReactNode;
}) {
  return null;
}

export default function MediaPlot({ overview }: MediaPlotProps) {
  return (
    <MediaContentBlock blockTitle="Plot" isBoxShadow={false}>
      <Box>{overview}</Box>
    </MediaContentBlock>
  );
}
