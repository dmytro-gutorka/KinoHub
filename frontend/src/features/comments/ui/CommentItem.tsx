import { Box, Stack, Typography } from '@mui/material';
import LabelWithIcon from '@shared/ui/LabelWithIcon';

interface CommentItemProps {}

export default function CommentItem() {
  return (
    <Stack direction="row" spacing={2}>
      <Box component="img" />

      <Stack>
        <Stack>
          <Typography>User name</Typography>
          Icon is Confirmed
        </Stack>

        <Typography>Comment</Typography>

        <Stack>
          <Stack direction="row" spacing={1}>
            <LabelWithIcon label={1}>ThumUP</LabelWithIcon>
            <LabelWithIcon label={1}>ThumDOWN</LabelWithIcon>
            <LabelWithIcon label={1}>Reply</LabelWithIcon>
          </Stack>

          <Typography>Date</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
