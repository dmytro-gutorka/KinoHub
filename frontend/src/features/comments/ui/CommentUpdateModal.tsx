import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';
import { useModalContext } from '@shared/providers/ModalProvider/ModalProvider';
import { useMutation } from '@tanstack/react-query';
import { MenuItem, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import DialogWindow from '@shared/ui/DialogWindow';
import updateComment from '@shared/api/kinohub/services/comments/updateComment';
import queryClient from '@app/queryClient';

export default function CommentUpdateModal({ currentReview, commentId, mediaType, mediaId }) {
  const reviewRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { closeMenu } = useMenuContext();
  const { openModal } = useModalContext();

  const { mutate: mutateUpdate } = useMutation({
    mutationFn: (updatedReview: { review: string }) => updateComment(commentId, updatedReview),
    onSuccess: () => {
      closeMenu();
      queryClient.invalidateQueries({ queryKey: ['comments', mediaId, mediaType] });
    },
  });

  async function handleUpdateComment() {
    const el: HTMLInputElement | HTMLTextAreaElement | null = reviewRef.current;

    if (!el) return setError('You have to enter a review before updating it');

    const reviewTest: string = el.value.trim();

    if (reviewTest.length < 10 || reviewTest.length > 500)
      return setError('Review must be between 10 and 500 characters');

    setError(null);
    mutateUpdate({ review: reviewTest });
  }

  const title = 'Update your review';

  return (
    <DialogWindow
      onClickYes={handleUpdateComment}
      title={title}
      description={
        <TextField
          name="review"
          multiline
          minRows={4}
          defaultValue={currentReview}
          inputRef={reviewRef}
          placeholder="Update your review"
          error={!!error}
          helperText={error ?? ' '}
          fullWidth
        />
      }
    >
      <MenuItem onClick={openModal}> Update comment</MenuItem>
    </DialogWindow>
  );
}
