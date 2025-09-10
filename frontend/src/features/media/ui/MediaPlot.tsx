import { MediaPlotProps } from '@features/media/model/types/mediaTypes';
import { Box } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';

export default function MediaPlot({ overview }: MediaPlotProps) {
  return (
    <BlockWrapper blockTitle="Plot" isBoxShadow={false}>
      <Box>{overview}</Box>
    </BlockWrapper>
  );
}
