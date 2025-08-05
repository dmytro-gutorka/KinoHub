import { Box, useTheme } from '@mui/material';

interface MediaHeaderPosterProps {
  imgUrl: string;
}

export default function MediaHeaderPoster({ imgUrl }: MediaHeaderPosterProps) {
  const theme = useTheme();

  return (
    <Box
      component="img"
      src={imgUrl}
      width="260px"
      height="380px"
      sx={{
        outline: `${theme.palette.transparentGrey} solid 2px`,
        borderRadius: '10px',
      }}
    />
  );
}
