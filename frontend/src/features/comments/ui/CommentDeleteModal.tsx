import CloseIcon from '@mui/icons-material/Close';
import { IconButton, MenuItem } from '@mui/material';
import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';
import { Modal } from '@shared/ui/Modal';
import React from 'react';
import useDeleteComment from '@features/comments/model/useDeleteComment';

interface CommentDeleteModalProps {
  commentId: number;
  mediaId: number;
  mediaType: string;
}

export default function CommentDeleteModal({
  commentId,
  mediaId,
  mediaType,
}: CommentDeleteModalProps) {
  const { closeMenu } = useMenuContext();
  const { mutate: deleteComment } = useDeleteComment(commentId, mediaId, mediaType);
  
  return (
    <>
      <Modal>
        <Modal.Open asChild>
          <MenuItem>Delete comment</MenuItem>
        </Modal.Open>
        <Modal.Container>
          <Modal.Close asChild>
            <IconButton
              onClick={closeMenu}
              size="small"
              aria-label="Close dialog"
              sx={{ position: 'absolute', right: 25, top: 25 }}
            >
              <CloseIcon />
            </IconButton>
          </Modal.Close>
          <Modal.Title subTitle="You could not undo this action.">
            Do you want to delete your comment ?
          </Modal.Title>
        </Modal.Container>
      </Modal>
    </>
  );
}
