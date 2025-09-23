import { Box, useTheme } from '@mui/material';

interface MediaHeaderPosterProps {
  imgUrl: string;
  width: number;
  heigh: number;
}

export default function MediaHeaderPoster({ imgUrl, width, heigh }: MediaHeaderPosterProps) {
  const theme = useTheme();

  return (
    <Box
      component="img"
      src={imgUrl}
      width={width}
      height={heigh}
      sx={{
        outline: `${theme.palette.transparentGrey03} solid 3px`,
        borderRadius: theme.shape.borderRadiusScale.sm,
      }}
    />
  );
}
