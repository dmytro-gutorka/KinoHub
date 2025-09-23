import { Stack, Typography, TypographyVariant, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface BlockWrapperProps {
  title?: string | ReactNode;
  children: ReactNode;
  titleFontWeight?: number;
  titleSizeVariant?: TypographyVariant;
  padding?: number;
  isBoxShadow?: boolean;
  bgColor?: string;
}

export default function BlockWrapper({
  children,
  title,
  padding = 6,
  titleFontWeight = 900,
  titleSizeVariant = 'h5',
  bgColor = 'transparent',
  isBoxShadow = true,
}: BlockWrapperProps) {
  const theme = useTheme();

  return (
    <Stack flexGrow={1} flexBasis={1}>
      <Stack
        boxShadow={isBoxShadow && theme.shadows[10]}
        borderRadius={theme.shape.borderRadiusScale.md}
        border={theme.border}
        bgcolor={bgColor}
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
