import { BlockWrapperProps } from '@shared/types/generalTypes';
import { Stack, Typography, useTheme } from '@mui/material';

export default function BlockWrapper({
  children,
  blockTitle,
  titleFontWeight = 900,
  titleSizeVariant = 'h5',
}: BlockWrapperProps) {
  const theme = useTheme();

  return (
    <Stack flexGrow={1} flexBasis={1}>
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
    <Stack
      paddingInline={4}
      justifyContent="center"
      borderRadius={theme.shape.borderRadiusScale.md}
      border={theme.border}

      flexGrow={1}
      padding={4}
    >
      {children}
    </Stack>
    </Stack>
  );
}

// justifyContent="center" height="100%" because of the content goes outside the container (fix later)
