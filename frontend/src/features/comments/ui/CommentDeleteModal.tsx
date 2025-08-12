import { useModalContext } from '@shared/providers/ModalProvider/ModalProvider';
import { useQueryClient } from '@tanstack/react-query';
import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';
import deleteComment from '@shared/api/kinohub/services/comments/deleteComment';
import DialogWindow from '@shared/ui/DialogWindow';
import React from 'react';

export default function CommentDeleteModal({ commentId }) {
  const queryClient = useQueryClient();

  const { closeMenu } = useMenuContext();
  const { openModal, isModalOpen } = useModalContext();

  console.log(isModalOpen);

  async function handleDeleteComment() {
    await deleteComment(commentId);
    await queryClient.invalidateQueries({ queryKey: ['comments', 119051, 'tv'] });

    closeMenu();
  }

  const description = 'You could not undo this action.';
  const title = 'Do you want to delete your comment ?';

  return (
    <>
      <DialogWindow
        onClickYes={handleDeleteComment}
        description={description}
        title={title}
      ></DialogWindow>
    </>
  );
}
