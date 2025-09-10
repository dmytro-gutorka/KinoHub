import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { CardMedia, Stack } from '@mui/material';
import Card from '@mui/material/Card';

interface MediaCardHoverableWrapperProps {
  children: ReactNode;
  width?: number | string | undefined;
  height: number | string | undefined;
  navTo?: string;
  imgURL: string;
}

export default function MediaCardHoverableWrapper({
  children,
  width = 220,
  height = 340,
  imgURL,
  navTo,
}: MediaCardHoverableWrapperProps) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(navTo)}
      sx={(theme) => ({
        background: 'transparent',
        position: 'relative',
        border: `1px solid ${theme.palette.transparentGrey01}`,
        transition: '0.3s',
        width,
        display: 'flex',
        flexDirection: 'column',
        '&:hover': { transform: navTo && 'scale(1.05)' },
      })}
    >
      <CardMedia image={imgURL} title="Card" sx={{ height, backgroundSize: 'cover' }} />
      <Stack sx={{ flexGrow: 1 }}>{children}</Stack>
    </Card>
  );
}
