import { Box, Stack, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import LabelWithIcon from '@shared/ui/LabelWithIcon';

interface CommentItemProps {
  commentData: unknown;
}

export default function CommentItem({ commentData }) {
  const { createdAt, dislikesCount, likesCount, review, user, id } = commentData;
  const { email, username } = user;
  const isConfirmed = id % 2 === 0; // just random, fetch from API later

  return (
    <Stack direction="row" spacing={2}>
      <Box
        component="img"
        src="/public/no-user-image-placeholder.jpg"
        width="50px"
        height="50px"
        borderRadius="50%"
      />

      <Stack>
        <Stack>
          <Typography>
            {username} {email}
          </Typography>
          Icon is Confirmed
        </Stack>

        <Typography>{review}</Typography>

        <Stack>
          <Stack direction="row" spacing={1}>
            <LabelWithIcon label={likesCount}>
              <ThumbUpOffAltIcon />
            </LabelWithIcon>
            <LabelWithIcon label={dislikesCount}>
              <ThumbDownOffAltIcon />
            </LabelWithIcon>
            {/*<LabelWithIcon label={1}>Reply</LabelWithIcon>*/}
          </Stack>

          <Typography>{createdAt}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
