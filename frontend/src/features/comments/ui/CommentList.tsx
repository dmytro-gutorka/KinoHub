import { Divider, Stack } from '@mui/material';
import CommentItem from '@features/comments/ui/CommentItem';

interface CommentListProps {
  comments: any[];
}

export default function CommentList({ comments }: CommentListProps) {
  const sortedComments = comments.sort((a, b) => b.id - a.id);

  return (
    <Stack rowGap={10}>
      {sortedComments.map((comment, index) => {
        const isLastItem = index === sortedComments.length - 1;

        return (
          <Stack>
            <CommentItem key={comment.id} comment={comment} />
            {!isLastItem && <Divider sx={{ width: '95%', placeSelf: 'end' }} />}
          </Stack>
        );
      })}
    </Stack>
  );
}
