import { Box, Stack, Typography, useTheme } from '@mui/material';
import { MediaContentBlockProps } from '@features/media/model/types/mediaTypes';

export default function BlockWrapper({
  children,
  blockTitle,
  titleFontWeight = 900,
  titleSizeVariant = 'h5',
}: MediaContentBlockProps) {
  const theme = useTheme();

  return (
    <Box
      borderRadius={2.5}
      flexBasis={1}
      flexGrow={1}
      minWidth={300}
      padding={4}
      border={theme.customStyles.border}
    >
      {blockTitle && (
        <Typography
          letterSpacing={0.01}
          fontWeight={titleFontWeight}
          lineHeight="32px"
          component="h3"
          variant={titleSizeVariant}
          mb={2}
        >
          {blockTitle}
        </Typography>
      )}
      <Stack justifyContent="center" height="100%" paddingInline={4}>
        {children}
      </Stack>
    </Box>
  );
}
// justifyContent="center" height="100%" because of the content goes outside the container (fix later)
