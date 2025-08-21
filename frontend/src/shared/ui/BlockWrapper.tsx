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
      border={theme.customStyles.border}
      borderRadius={2.5}
      padding={4}
      minWidth={300}
      flexGrow={1}
      flexBasis={1}
    >
      {blockTitle && (
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
      )}
      <Stack justifyContent="center" height="100%" paddingInline={4}>
        {children}
      </Stack>
    </Box>
  );
}
// justifyContent="center" height="100%"  из за этого контент выходит за пределы контейнера