import { MediaType } from '@shared/types/generalTypes';
import { MenuItem } from '@mui/material';
import { Modal } from '@shared/ui/Modal';
import { useMenuContext } from '@shared/providers/MenuProvider/MenuProvider';
import useUpdateComment from '@features/comments/model/useUpdateComment';
import CommentForm from '@features/comments/ui/CommentForm';

interface CommentUpdateModalProps {
  commentId: number;
  mediaType: MediaType;
  mediaId: number;
  currentReview: string;
}

export default function CommentUpdateModal({
  commentId,
  mediaType,
  mediaId,
  currentReview,
}: CommentUpdateModalProps) {
  const { closeMenu } = useMenuContext();
  const { mutate: updateComment } = useUpdateComment(commentId, mediaId, mediaType);

  async function handleOnSubmit(review: string) {
    updateComment(review);
    closeMenu();
  }

  return (
    <Modal>
      <Modal.Open asChild>
        <MenuItem>Update comment</MenuItem>
      </Modal.Open>

      <Modal.Container>
        <Modal.Header
          subTitle="This action changes your current comment permanently"
          userOnClose={closeMenu}
        >
          Update your comment
        </Modal.Header>

        <Modal.Content>
          <CommentForm
            mediaType={mediaType}
            onSubmit={handleOnSubmit}
            defaultValue={currentReview}
            cssPlaceSelf="foo"
          />
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
}
