import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import Card from '@mui/material/Card';

interface HoverableCardWrapperProps {
  children: ReactNode;
  cardWidth?: number | string | undefined;
  navTo?: string;
  flexGrow?: number;
}

export default function HoverableCardWrapper({
  children,
  cardWidth = 220,
  flexGrow = 0,
  navTo,
}: HoverableCardWrapperProps) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(navTo)}
      sx={(theme) => ({
        background: 'transparent',
        position: 'relative',
        border: `1px solid ${theme.palette.transparentGrey01}`,
        transition: '0.3s',
        width: cardWidth,
        flexGrow: flexGrow,
        '&:hover': { transform: navTo && 'scale(1.05)' },
      })}
    >
      {children}
    </Card>
  );
}
