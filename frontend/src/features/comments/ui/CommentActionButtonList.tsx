import { IconButton, Stack, useTheme } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import useMutateCommentAction from '@features/comments/model/useMutateCommentAction';

export type CommentVoteValue = -1 | 0 | 1;

export default function CommentActionButtonList({
  likesCount,
  dislikesCount,
  commentId,
  mediaId,
  mediaType,
}) {
  const theme = useTheme();

  const { mutate } = useMutateCommentAction(commentId, mediaId, mediaType);

  return (
    <Stack direction="row" color={theme.palette.grey[300]}>
      <IconButton onClick={() => mutate({ vote: 1 })}>
        <LabelWithIcon label={likesCount}>
          <ThumbUpOffAltIcon />
        </LabelWithIcon>
      </IconButton>
      <IconButton onClick={() => mutate({ vote: -1 })}>
        <LabelWithIcon label={dislikesCount}>
          <ThumbDownOffAltIcon />
        </LabelWithIcon>
      </IconButton>
    </Stack>
  );
}
