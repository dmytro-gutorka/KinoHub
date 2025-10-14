import { Stack, Typography, TypographyVariant, useTheme } from '@mui/material';
import type { Property } from 'csstype';

import { ReactNode } from 'react';
import { BorderRadius } from '@shared/types/generalTypes';

export interface BlockWrapperProps {
  title?: string | ReactNode;
  bgColor?: string;
  padding?: number;
  position?: Property.Position;
  children: ReactNode;
  isBoxShadow?: boolean;
  borderRadius?: keyof BorderRadius;
  titleFontWeight?: number;
  titleSizeVariant?: TypographyVariant;
}

export default function BlockWrapper({
  children,
  title,
  padding = 6,
  position = 'static',
  isBoxShadow = true,
  borderRadius = 'md',
  titleFontWeight = 900,
  titleSizeVariant = 'h5',
}: BlockWrapperProps) {
  const theme = useTheme();

  return (
    <Stack flexGrow={1} flexBasis={1} position={position}>
      <Stack
        boxShadow={isBoxShadow ? theme.shadows[10] : 'none'}
        borderRadius={theme.shape.borderRadiusScale[borderRadius]}
        bgcolor={theme.palette.accentBgBlack}
        border={theme.border}
        paddingInline={4}
        padding={padding}
        flexGrow={1}
      >
        {title && (
          <Typography
            fontWeight={titleFontWeight}
            variant={titleSizeVariant}
            letterSpacing={0.01}
            lineHeight="32px"
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
