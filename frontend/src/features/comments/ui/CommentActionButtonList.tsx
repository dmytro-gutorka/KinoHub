import { IconButton, Stack, useTheme } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import useUpdateCommentAction from '@features/comments/model/useUpdateCommentAction';

export type CommentVoteValue = -1 | 0 | 1;

export default function CommentActionButtonList({ likesCount, dislikesCount }) {
  const theme = useTheme();

  const {} = useUpdateCommentAction();

  return (
    <Stack direction="row" color={theme.palette.grey[300]}>
      <IconButton>
        <LabelWithIcon label={likesCount}>
          <ThumbUpOffAltIcon />
        </LabelWithIcon>
      </IconButton>
      <IconButton>
        <LabelWithIcon label={dislikesCount}>
          <ThumbDownOffAltIcon />
        </LabelWithIcon>
      </IconButton>
    </Stack>
  );
}
