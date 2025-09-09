import React from 'react';
import CommentDeleteModal from '@features/comments/ui/CommentDeleteModal';
import ContextMenu from '@shared/ui/ContextMenu';
import MenuProvider from '@shared/providers/MenuProvider';
import CommentUpdateModal from '@features/comments/ui/CommentUpdateModal';
import { MediaType } from '@shared/types/generalTypes';

interface CommentContextMenuProps {
  commentId: number;
  mediaType: MediaType;
  mediaId: number;
  currentReview: string;
}

export default function CommentContextMenu({
  commentId,
  mediaType,
  mediaId,
  currentReview,
}: CommentContextMenuProps) {
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
