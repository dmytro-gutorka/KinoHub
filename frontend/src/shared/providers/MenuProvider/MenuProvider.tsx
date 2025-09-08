import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface IMenuProvider {
  isMenuOpen: boolean;
  openMenu: (event: React.MouseEvent<HTMLElement>) => void;
  closeMenu: () => void;
  anchorEl: null | HTMLElement;
}

const MenuContext = createContext<IMenuProvider | null>(null);

export function useMenuContext() {
  const context: IMenuProvider | null = useContext(MenuContext);

  if (!context) throw new Error('useMenuContext must be used within a ModalProvider');

  return context;
}

export default function MenuProvider({ children }: { children: ReactNode }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const openMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget),
    []
  );
  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const value = useMemo(
    (): IMenuProvider => ({ isMenuOpen, openMenu, closeMenu, anchorEl }),
    [isMenuOpen, openMenu, closeMenu, anchorEl]
  );

  return <MenuContext value={value}>{children}</MenuContext>;
}
