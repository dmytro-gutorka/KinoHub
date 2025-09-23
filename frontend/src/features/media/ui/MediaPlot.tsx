import { MediaPlotProps } from '@features/media/types/mediaTypes';
import { Box } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';

export default function MediaPlot({ overview }: MediaPlotProps) {
  return (
    <BlockWrapper title="Plot" isBoxShadow={false}>
      <Box>{overview}</Box>
    </BlockWrapper>
  );
}
