import { MediaType } from '@shared/types/generalTypes';
import { MenuItem } from '@mui/material';
import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';
import { Modal } from '@shared/ui/Modal';
import useDeleteComment from '@features/comments/model/useDeleteComment';
import DialogActions from '@mui/material/DialogActions';
import React from 'react';

interface CommentDeleteModalProps {
  commentId: number;
  mediaId: number;
  mediaType: MediaType;
}

export default function CommentDeleteModal({
  commentId,
  mediaId,
  mediaType,
}: CommentDeleteModalProps) {
  const { closeMenu } = useMenuContext();
  const { mutate: deleteComment } = useDeleteComment(commentId, mediaId, mediaType);

  function handleOnClick() {
    deleteComment();
    closeMenu();
  }

  return (
    <>
      <Modal>
        <Modal.Open asChild>
          <MenuItem>Delete comment</MenuItem>
        </Modal.Open>

        <Modal.Container>
          <Modal.Header subTitle="You could not undo this action." userOnClose={closeMenu}>
            Do you want to delete your comment ?
          </Modal.Header>

          <Modal.Content>
            <DialogActions>
              <Modal.ActionButton label="Delete" userOnClick={handleOnClick} />
            </DialogActions>
          </Modal.Content>
        </Modal.Container>
      </Modal>
    </>
  );
}
