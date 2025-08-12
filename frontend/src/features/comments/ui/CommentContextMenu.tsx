import React from 'react';
import ContextMenu from '@shared/ui/ContextMenu';
import CommentDeleteModal from '@features/comments/ui/CommentDeleteModal';
import ModalProvider from '@shared/providers/ModalProvider';
import { MenuItem } from '@mui/material';

export default function CommentContextMenu({ commentId }) {
  return (
    <ContextMenu>
      <ModalProvider>
        <CommentDeleteModal commentId={commentId} />
      </ModalProvider>

      <MenuItem> Update comment</MenuItem>
    </ContextMenu>
  );
}
