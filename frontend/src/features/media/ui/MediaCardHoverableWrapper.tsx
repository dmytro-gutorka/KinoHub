import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { Box, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';

interface MediaCardHoverableWrapperProps {
  children: ReactNode;
  width: number;
  height: number;
  navTo: string;
  imgURL: string;
}

export default function MediaCardHoverableWrapper({
  children,
  width,
  height,
  imgURL,
  navTo,
}: MediaCardHoverableWrapperProps) {
  return (
    <Card
      sx={(theme) => ({
        background: 'transparent',
        position: 'relative',
        width: width,
        border: `1px solid ${theme.palette.transparentGrey}`,
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      })}
    >
      <Box component={NavLink} to={navTo}>
        <CardMedia sx={{ height, backgroundSize: 'cover' }} image={imgURL} title="Movie card" />
      </Box>
      <>{children}</>
    </Card>
  );
}
