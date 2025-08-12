import { IconButton, Menu } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';

export default function ContextMenu({ children }) {
  const { isMenuOpen, openMenu, closeMenu, anchorEl } = useMenuContext();

  return (
    <>
      <IconButton onClick={openMenu}>
        <MoreHorizIcon
          id="comment-actions-button"
          aria-controls={isMenuOpen ? 'comment-actions-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? 'true' : undefined}
        />
      </IconButton>
      <Menu
        id="comment-actions-menu"
        aria-labelledby="comment-actions-button"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={closeMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {children}
      </Menu>
    </>
  );
}
