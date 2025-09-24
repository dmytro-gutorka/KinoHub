import { Stack, Typography, TypographyVariant, useTheme } from '@mui/material';
import type { Property } from 'csstype';

import { ReactNode } from 'react';

export interface BlockWrapperProps {
  title?: string | ReactNode;
  children: ReactNode;
  titleFontWeight?: number;
  titleSizeVariant?: TypographyVariant;
  padding?: number;
  isBoxShadow?: boolean;
  bgColor?: string;
  position?: Property.Position;
}

export default function BlockWrapper({
  children,
  title,
  padding = 6,
  titleFontWeight = 900,
  titleSizeVariant = 'h5',
  bgColor = 'transparent',
  isBoxShadow = true,
  position = 'static',
}: BlockWrapperProps) {
  const theme = useTheme();

  return (
    <Stack flexGrow={1} flexBasis={1} position={position}>
      <Stack
        boxShadow={isBoxShadow && theme.shadows[10]}
        borderRadius={theme.shape.borderRadiusScale.md}
        border={theme.border}
        bgcolor={theme.palette.darkBlueAccent}
        paddingInline={4}
        padding={padding}
        flexGrow={1}
      >
        {title && (
          <Typography
            letterSpacing={0.01}
            lineHeight="32px"
            fontWeight={titleFontWeight}
            variant={titleSizeVariant}
            component="h3"
            mb={2}
          >
            {title}
          </Typography>
        )}

        {children}
      </Stack>
    </Stack>
  );
}

// justifyContent="center" height="100%" because of the content goes outside the container (fix later)
