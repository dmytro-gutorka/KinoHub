import { Box, Typography, useTheme } from '@mui/material';
import { MediaContentBlockProps } from '@features/media/model/types/mediaTypes';

export default function MediaContentBlock({ blockTitle, children }: MediaContentBlockProps) {
  const theme = useTheme();

  return (
    <Box borderRadius={2.5} padding={4} border={theme.customStyles.border}>
      <Typography variant="h5" component="h3">
        {blockTitle}
      </Typography>
      {children}
    </Box>
  );
}
