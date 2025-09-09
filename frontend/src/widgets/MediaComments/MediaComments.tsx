import { MediaType } from '@shared/types/generalTypes';
import { Stack, Typography } from '@mui/material';
import CommentList from '@features/comments/ui/CommentList';
import CommentForm from '@features/comments/ui/CommentForm';
import useComments from '@features/comments/model/useComment';
import useCreateComment from '@features/comments/model/useCreateComment';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

interface MediaCommentsProps {
  mediaId: number;
  mediaType: MediaType;
}

export default function MediaComments({ mediaId, mediaType }: MediaCommentsProps) {
  // убрать пароль из запроса на беке
  const { data: comments, isLoading } = useComments(mediaId, mediaType);
  const { mutate: createComment } = useCreateComment(mediaId, mediaType);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack direction="column" gap={4} m={4} mt={10}>
      <Typography
        letterSpacing={0.01}
        fontWeight={900}
        lineHeight="32px"
        component="h3"
        variant="h5"
        mb={2}
      >
        <LabelWithIcon label={`Reviews (${comments?.length || 0})`}>
          <QuestionAnswerOutlinedIcon />
        </LabelWithIcon>
      </Typography>
      <CommentForm mediaType={mediaType} onSubmit={createComment} />
      <CommentList comments={comments} />
    </Stack>
  );
}
