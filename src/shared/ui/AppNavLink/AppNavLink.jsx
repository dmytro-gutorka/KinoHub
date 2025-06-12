import { NavLink as RouterNavLink } from 'react-router';
import { Stack, styled } from '@mui/material';

import Link from '@mui/material/Link';

const StyledNavLink = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '20px',
  letterSpacing: 2,
  textDecoration: 'none',

  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    position: 'relative',

    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '3px',
      backgroundColor: theme.palette.primary.main,
      top: '130%',
      left: 0,
    },
  },
}));

const StyledStack = styled(Stack)(() => ({
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: 16,
  flexDirection: 'row',
  columnGap: '10px',
}));

const AppNavLink = ({ children, to, hasIcon }) => {
  return (
    <StyledNavLink to={to} component={RouterNavLink}>
      {hasIcon && <StyledStack component="li">{children}</StyledStack>}
      {!hasIcon && children}
    </StyledNavLink>
  );
};

export default AppNavLink;
