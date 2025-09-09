import { MediaType } from '@shared/types/generalTypes';
import { Stack } from '@mui/material';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CommentList from '@features/comments/ui/CommentList';
import CommentForm from '@features/comments/ui/CommentForm';
import useComments from '@features/comments/model/useComment';
import BlockWrapper from '@shared/ui/BlockWrapper';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import useCreateComment from '@features/comments/model/useCreateComment';

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
    <BlockWrapper
      blockTitle={
        <LabelWithIcon label={`Reviews (${comments?.length || 0})`}>
          <QuestionAnswerOutlinedIcon />
        </LabelWithIcon>
      }
      padding={8}
    >
      <Stack direction="column" gap={4} m={4} mt={10}>
        <CommentForm mediaType={mediaType} onSubmit={createComment} />
        <CommentList comments={comments} />
      </Stack>
    </BlockWrapper>
  );
}
