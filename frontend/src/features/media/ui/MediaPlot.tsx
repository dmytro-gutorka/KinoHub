import { MediaPlotProps } from '@features/media/model/types/mediaTypes';
import { Box } from '@mui/material';
import { MediaContentBlock } from '@features/media';

export default function MediaPlot({ overview }: MediaPlotProps) {
  return (
    <MediaContentBlock blockTitle="Plot" isBoxShadow={false}>
      <Box>{overview}</Box>
    </MediaContentBlock>
  );
}
