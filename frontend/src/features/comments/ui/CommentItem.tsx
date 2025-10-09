import { Avatar, Stack, Typography, useTheme } from '@mui/material';
import { selectUserMetaData } from '@features/auth/selectors';
import { useSelector } from 'react-redux';
import CommentActionButtonList from '@features/comments/ui/CommentActionButtonList';
import MarkCircleIcon from '@shared/icons/MarkCircleIcon';
import getDateFromISO from '@shared/helpers/getDateFromISO';
import CommentContextMenu from '@features/comments/ui/CommentContextMenu';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import stringToColor from '@shared/helpers/stringToColor';
import React from 'react';

export default function CommentItem({ comment }) {
  const {
    id: commentId,
    dislikesCount,
    likesCount,
    createdAt,
    mediaType,
    mediaId,
    review,
    votes,
    user,
  } = comment;
  const {
    id: commentUserId,
    userAuth: { isEmailConfirmed },
    profile: { firstName, lastName },
  } = user;

  const userId: number | undefined = useSelector(selectUserMetaData)?.id;
  const theme = useTheme();

  let prevUserVote;
  if (votes.length > 0) prevUserVote = votes.find((v) => v.userId === userId)?.vote;

  const fulName = `${firstName} ${lastName}`;
  const fullNameInitials = fullNameToInitials(fulName);
  console.log(comment);

  return (
    <Stack direction="row" spacing={4}>
      <Avatar sx={{ bgColor: stringToColor(fulName) }}>{fullNameInitials}</Avatar>

      <Stack flexGrow={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontWeight="900" variant="h6">
              {firstName} {lastName}
            </Typography>
            {isEmailConfirmed && <MarkCircleIcon />}
          </Stack>
          {userId === commentUserId && (
            <CommentContextMenu
              commentId={commentId}
              mediaId={mediaId}
              mediaType={mediaType}
              currentReview={review}
            />
          )}
        </Stack>
        <Typography color={theme.palette.grey[300]}>{review}</Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={4} mb={1}>
          <CommentActionButtonList
            dislikesCount={dislikesCount}
            likesCount={likesCount}
            commentId={commentId}
            mediaType={mediaType}
            mediaId={mediaId}
            prevUserVote={prevUserVote}
          />
          <Typography color={theme.palette.grey[300]}> {getDateFromISO(createdAt)}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
