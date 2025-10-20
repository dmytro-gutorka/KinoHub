import { Button } from '@mui/material';
import { NavLink } from 'react-router';
import theme from '@app/theme/theme';
import { ReactNode } from 'react';

export interface NavLinkProps {
  to: string;
  label: string;
  icon?: ReactNode;
  ml?: number;
}

export default function StyledSubNavLink({ to, icon, label, ml = 0 }: NavLinkProps) {
  return (
    <Button
      component={NavLink}
      startIcon={icon}
      variant="text"
      to={to}
      sx={{
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 1,
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        paddingRight: 12,
        color: theme.palette.common.white,
        marginLeft: ml,

        '&.active, &:hover': {
          color: theme.palette.common.white,
          background: theme.palette.transparentGrey01,
        },
      }}
    >
      {label}
    </Button>
  );
}
