import React, { ReactNode } from 'react';
import { NavLinkProps } from 'react-router';

export interface AsideBarLinkProps {
  to: string;
  hasIcon?: boolean;
  children: ReactNode;
}

export interface StyledNavLinkProps {
  to?: string;
  component?: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}

export interface AsideBarSectionProps {
  children: ReactNode;
  title: string;
}
