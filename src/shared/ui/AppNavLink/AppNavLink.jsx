import { NavLink as RoutLink } from 'react-router';
import { Stack, styled } from '@mui/material';

import Link from '@mui/material/Link';

const StyledNavLink = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '20px',
  letterSpacing: 2,
  textDecoration: 'none',

  '&.active': {
    color: theme.palette.customColors.accent,
    fontWeight: 'bold',
    position: 'relative',

    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '3px',
      backgroundColor: '#00B9AE',
      top: '130%',
      left: 0,
    },
  },
}));

const AppNavLink = ({ children, to, hasIcon }) => {
  return (
    <StyledNavLink to={to} component={RoutLink}>
      {!hasIcon && children}
      {hasIcon && (
        <Stack
          component="li"
          direction="row"
          gap={0.75}
          sx={{ justifyContent: 'flex-start', alignItems: 'center', fontSize: 16 }}
        >
          {children}
        </Stack>
      )}
    </StyledNavLink>
  );
};

export default AppNavLink;
