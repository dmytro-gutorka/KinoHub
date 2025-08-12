import { MenuItem, TextField } from '@mui/material';
import DialogWindow from '@shared/ui/DialogWindow';
import React, { useRef } from 'react';
import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';
import { useModalContext } from '@shared/providers/ModalProvider/ModalProvider';
import queryClient from '@app/queryClient';
import updateComment from '@shared/api/kinohub/services/comments/updateComment';

export default function CommentUpdateModal({ currentReview, commentId, mediaType, mediaId }) {
  const reviewRef = useRef(null);
  let error = null;

  const { closeMenu } = useMenuContext();
  const { openModal } = useModalContext();

  async function handleUpdateComment() {
    if (reviewRef?.current === null)
      return (error = 'You have to enter a review before updating it');

    const updatedReviewValue: string = reviewRef.current.value;

    console.log(reviewRef.current.value);

    if (updatedReviewValue.length < 15 || updatedReviewValue.length < 500)
      return (error = 'Your review must be between 15 and 500 characters');

    await updateComment(commentId, updatedReviewValue);
    await queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] });

    closeMenu();
  }

  const title = 'Update your review';

  return (
    <DialogWindow
      onClickYes={handleUpdateComment}
      description={
        <TextField
          multiline
          placeholder="Update your review"
          defaultValue={currentReview}
          ref={reviewRef}
        />
      }
      title={title}
    >
      <MenuItem onClick={openModal}> Update comment</MenuItem>
    </DialogWindow>
  );
}
