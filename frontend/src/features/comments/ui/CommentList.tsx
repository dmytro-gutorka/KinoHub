import { Stack } from '@mui/material';
import CommentItem from '@features/comments/ui/CommentItem';

interface CommentListProps {
  commentList: any;
}

export default function CommentList({ commentList }): CommentListProps {
  return (
    <Stack spacing={4} mt={10} ml={8}>
      {commentList.map((commentData) => (
        <CommentItem key={commentData.id} commentData={commentData} />
      ))}
    </Stack>
  );
}
