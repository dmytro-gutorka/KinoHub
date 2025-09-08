import React from 'react';
import { NavLinkProps } from 'react-router';

export interface StyledNavLinkProps {
  to?: string;
  component?: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}
