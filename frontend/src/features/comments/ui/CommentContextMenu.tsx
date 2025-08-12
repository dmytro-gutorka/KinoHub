import ContextMenu from '@shared/ui/ContextMenu';
import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import CommentDeleteDialog from '@features/comments/ui/CommentDeleteDialog';

export default function CommentContextMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleUpdateComment() {
    setAnchorEl(null);
  }

  return (
    <ContextMenu anchorEl={anchorEl} onClose={handleClose} onClick={handleClick} open={open}>
      <CommentDeleteDialog onSetAnchor={setAnchorEl} />
      <MenuItem onClick={handleUpdateComment}>Update comment</MenuItem>
    </ContextMenu>
  );
}
