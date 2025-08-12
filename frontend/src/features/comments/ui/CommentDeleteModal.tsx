import { useModalContext } from '@shared/providers/ModalProvider/ModalProvider';
import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';
import deleteComment from '@shared/api/kinohub/services/comments/deleteComment';
import DialogWindow from '@shared/ui/DialogWindow';
import React from 'react';
import { MenuItem } from '@mui/material';
import queryClient from '@app/queryClient';

export default function CommentDeleteModal({ commentId, mediaId, mediaType }) {
  const { closeMenu } = useMenuContext();
  const { openModal } = useModalContext();

  async function handleDeleteComment() {
    await deleteComment(commentId);
    await queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] });

    closeMenu();
  }

  const description = 'You could not undo this action.';
  const title = 'Do you want to delete your comment ?';

  return (
    <>
      <DialogWindow onClickYes={handleDeleteComment} description={description} title={title}>
        <MenuItem onClick={openModal}>Delete comment</MenuItem>
      </DialogWindow>
    </>
  );
}
