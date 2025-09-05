import React from 'react';
import ContextMenu from '@shared/ui/ContextMenu';
import CommentDeleteModal from '@features/comments/ui/CommentDeleteModal';
import CommentUpdateModal from '@features/comments/ui/CommentUpdateModal';

// export default function CommentContextMenu({ commentId, mediaType, mediaId, currentReview }) {
//   return (
//     <ContextMenu>
//       <ModalProvider>
//         <CommentDeleteModal commentId={commentId} mediaId={mediaId} mediaType={mediaType} />
//       </ModalProvider>
//
//       <ModalProvider>
//         <CommentUpdateModal
//           commentId={commentId}
//           mediaId={mediaId}
//           mediaType={mediaType}
//           currentReview={currentReview}
//         />
//       </ModalProvider>
//     </ContextMenu>
//   );
// }
