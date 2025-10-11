import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import useMutateCommentAction from '@features/comments/hooks/useMutateCommentAction';

export type CommentVoteValue = -1 | 0 | 1;

export default function CommentActionButtonList({
  likesCount,
  dislikesCount,
  commentId,
  mediaId,
  mediaType,
  prevUserVote,
}) {
  const theme = useTheme();

  const { mutate } = useMutateCommentAction(commentId, mediaId, mediaType);

  return (
    <Stack direction="row" color={theme.palette.grey[300]}>
      <IconButton
        onClick={() => mutate({ vote: prevUserVote === 1 ? 0 : 1 })}
        sx={{
          gap: 1.5,
          paddingLeft: 0,
          '&:hover, &:hover p': {
            backgroundColor: 'transparent',
            color: 'rgb(74, 222, 128)',
          },
        }}
      >
        <ThumbUpOffAltIcon fontSize="small" />
        <Typography fontSize={20} fontWeight={600}>
          {likesCount}
        </Typography>
      </IconButton>

      <IconButton
        onClick={() => mutate({ vote: prevUserVote === -1 ? 0 : -1 })}
        sx={{
          gap: 1.5,
          '&:hover, &:hover p': {
            backgroundColor: 'transparent',
            color: 'rgb(248, 113, 113)',
          },
        }}
      >
        <ThumbDownOffAltIcon fontSize="small" />
        <Typography fontSize={20} fontWeight={600}>
          {dislikesCount}
        </Typography>
      </IconButton>
    </Stack>
  );
}
