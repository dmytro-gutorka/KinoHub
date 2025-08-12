import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import DialogWindow from '@shared/ui/DialogWindow';

interface CommentDeleteDialogProps {
  onSetAnchor: any;
}

export default function CommentDeleteDialog({ onSetAnchor }: CommentDeleteDialogProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDeleteComment() {
    onSetAnchor(null);
  }

  return (
    <DialogWindow open={open} onClose={handleClose}>
      <MenuItem onClick={handleClickOpen}>Delete comment</MenuItem>;
    </DialogWindow>
  );
}
