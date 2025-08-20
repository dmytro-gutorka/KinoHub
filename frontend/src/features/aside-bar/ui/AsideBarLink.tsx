import { NavLink as RouterNavLink } from 'react-router';
import { AsideBarLinkProps, StyledNavLinkProps } from '@features/aside-bar/model/asideBarTypes';
import { Stack, styled } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';

const StyledNavLink = styled(Link)(({ theme }) => ({ to, component }: StyledNavLinkProps) => ({
  fontWeight: 400,
  fontSize: '20px',
  letterSpacing: 2,
  textDecoration: 'none',
  textTransform: 'capitalize',
  borderRadius: theme.spacing(2),
  paddingBlock: theme.spacing(2.5),
  paddingRight: theme.spacing(14),
  paddingLeft: theme.spacing(2),

  '&.active': {
    color: theme.palette.primary.main,
    background: theme.palette.gradientGrey,
  },
}));

interface StyledStackProps {
  component?: string;
}

const StyledStack = styled(Stack)(({ component }: StyledStackProps) => ({
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  columnGap: '10px',
  fontSize: 16,
}));

const AsideBarLink = ({ children, to, hasIcon }: AsideBarLinkProps) => {
  return (
    <StyledNavLink to={to} component={RouterNavLink}>
      {hasIcon && <StyledStack component="li">{children}</StyledStack>}
      {!hasIcon && children}
    </StyledNavLink>
  );
};

export default AsideBarLink;
