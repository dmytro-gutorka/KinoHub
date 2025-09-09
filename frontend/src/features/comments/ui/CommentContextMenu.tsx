import React from 'react';
import CommentDeleteModal from '@features/comments/ui/CommentDeleteModal';
import ContextMenu from '@shared/ui/ContextMenu';
import MenuProvider from '@shared/providers/MenuProvider';
import CommentUpdateModal from '@features/comments/ui/CommentUpdateModal';

export default function CommentContextMenu({ commentId, mediaType, mediaId, currentReview }) {
  return (
    <MenuProvider>
      <ContextMenu>
        <CommentDeleteModal commentId={commentId} mediaType={mediaType} mediaId={mediaId} />
        <CommentUpdateModal
          currentReview={currentReview}
          commentId={commentId}
          mediaType={mediaType}
          mediaId={mediaId}
        />
      </ContextMenu>
    </MenuProvider>
  );
}
