import { IconButton, Menu } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

export default function ContextMenu({ anchorEl, onClose, onClick, open, children }) {
  return (
    <>
      <IconButton onClick={onClick}>
        <MoreHorizIcon
          id="comment-actions-button"
          aria-controls={open ? 'comment-actions-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        />
      </IconButton>
      <Menu
        id="comment-actions-menu"
        aria-labelledby="comment-actions-button"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
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
