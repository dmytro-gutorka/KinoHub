import { Box, Typography, useTheme } from '@mui/material';
import { MediaContentBlockProps } from '@features/media/model/types/mediaTypes';

export default function BlockWrapper({
  children,
  blockTitle,
  titleFontWeight = 900,
  titleSizeVariant = 'h5',
}: MediaContentBlockProps) {
  const theme = useTheme();

  return (
    <Box borderRadius={2.5} padding={4} border={theme.customStyles.border}>
      <Typography
        variant={titleSizeVariant}
        component="h3"
        fontWeight={titleFontWeight}
        letterSpacing={0.01}
        lineHeight="32px"
        mb={2}
      >
        {blockTitle}
      </Typography>
      <Box paddingInline={4}>{children}</Box>
    </Box>
  );
}
