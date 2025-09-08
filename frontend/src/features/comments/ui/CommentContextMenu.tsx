import React from 'react';
import CommentDeleteModal from '@features/comments/ui/CommentDeleteModal';
import ContextMenu from '@shared/ui/ContextMenu';
import MenuProvider from '@shared/providers/MenuProvider';

export default function CommentContextMenu({ commentId, mediaType, mediaId, currentReview }) {
  return (
    <MenuProvider>
      <ContextMenu>
        <CommentDeleteModal
          commentId={commentId}
          mediaType={mediaType}
          mediaId={mediaId}
        ></CommentDeleteModal>
      </ContextMenu>
    </MenuProvider>
  );
}
