import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router';
import theme from '@app/theme/theme';

export interface NavLinkProps {
  to: string;
  label: string;
  icon?: ReactNode;
}

const StyledNavLink = ({ to, icon, label }: NavLinkProps) => {
  return (
    <Button
      to={to}
      component={NavLink}
      startIcon={icon}
      variant="text"
      sx={{
        fontWeight: 900,
        letterSpacing: 1,
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        paddingRight: 12,
        color: theme.palette.common.white,

        '&.active, &:hover': {
          color: theme.palette.common.white,
          background: theme.palette.transparentGrey01,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default StyledNavLink;
