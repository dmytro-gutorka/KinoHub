import { Box, useTheme } from '@mui/material';
import { MediaPlotProps } from '@features/media/model/types/mediaTypes';
import { MediaContentBlock } from '@features/media';

const MediaPlot = ({ overview }: MediaPlotProps) => {
  const theme = useTheme();

  return (
    <MediaContentBlock blockTitle="Plot">
      <Box>{overview}</Box>
    </MediaContentBlock>
  );
};

export default MediaPlot;
