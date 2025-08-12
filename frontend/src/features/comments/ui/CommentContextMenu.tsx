import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import CommentDeleteDialog from '@features/comments/ui/CommentDeleteDialog';
import ContextMenu from '@shared/ui/ContextMenu';

export default function CommentContextMenu({ commentId }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleUpdateComment = () => setAnchorEl(null);

  return (
    <ContextMenu anchorEl={anchorEl} onClose={handleClose} onClick={handleClick} open={open}>
      <CommentDeleteDialog onSetAnchor={setAnchorEl} commentId={commentId} />
      <MenuItem onClick={handleUpdateComment}>Update comment</MenuItem>
    </ContextMenu>
  );
}
