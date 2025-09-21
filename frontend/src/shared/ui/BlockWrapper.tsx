import { Stack, Typography, TypographyVariant, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface BlockWrapperProps {
  blockTitle?: string | ReactNode;
  children: ReactNode;
  titleFontWeight?: number;
  titleSizeVariant?: TypographyVariant;
  padding?: number;
  isBoxShadow?: boolean;
}

export default function BlockWrapper({
  children,
  blockTitle,
  padding = 6,
  titleFontWeight = 900,
  titleSizeVariant = 'h5',
  isBoxShadow = true,
}: BlockWrapperProps) {
  const theme = useTheme();

  return (
    <Stack flexGrow={1} flexBasis={1}>
      <Stack
        boxShadow={isBoxShadow && theme.shadows[10]}
        paddingInline={4}
        borderRadius={theme.shape.borderRadiusScale.md}
        border={theme.border}
        flexGrow={1}
        padding={padding}
      >
        {blockTitle && (
          <Typography
            letterSpacing={0.01}
            lineHeight="32px"
            fontWeight={titleFontWeight}
            variant={titleSizeVariant}
            component="h3"
            mb={2}
          >
            {blockTitle}
          </Typography>
        )}

        {children}
      </Stack>
    </Stack>
  );
}

// justifyContent="center" height="100%" because of the content goes outside the container (fix later)
