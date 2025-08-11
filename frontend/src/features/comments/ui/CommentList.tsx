import { Stack } from '@mui/material';
import CommentItem from '@features/comments/ui/CommentItem';

interface CommentListProps {
  commentList: any[];
}

export default function CommentList({ commentList }: CommentListProps) {
  const sortedCommentList = commentList.sort((a, b) => b.id - a.id);

  return (
    <Stack spacing={8} mt={10} ml={8}>
      {sortedCommentList.map((commentData) => (
        <CommentItem key={commentData.id} commentData={commentData} />
      ))}
    </Stack>
  );
}
