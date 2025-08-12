import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import DialogWindow from '@shared/ui/DialogWindow';
import deleteComment from '@shared/api/kinohub/services/comments/deleteComment';
import { useQueryClient } from '@tanstack/react-query';

interface CommentDeleteDialogProps {
  onSetAnchor: any;
  commentId: number;
}

export default function CommentDeleteDialog({ onSetAnchor, commentId }: CommentDeleteDialogProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const queryClient = useQueryClient();

  async function handleDeleteComment() {
    onSetAnchor(null);
    await deleteComment(commentId);
    await queryClient.invalidateQueries({ queryKey: ['comments', 119051, 'tv'] });
  }

  const description = 'You could not undo this action.';
  const title = 'Do you want to delete your comment ?';

  return (
    <DialogWindow
      onClickYes={handleDeleteComment}
      onClose={handleClose}
      description={description}
      title={title}
      open={open}
    >
      <MenuItem onClick={handleClickOpen}>Delete comment</MenuItem>
    </DialogWindow>
  );
}
