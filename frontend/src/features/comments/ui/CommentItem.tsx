import { selectUserMetaData } from '@features/auth/model/selectors';
import { useSelector } from 'react-redux';
import { Avatar, IconButton, Stack, Typography, useTheme } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import MarkCircleIcon from '@shared/icons/MarkCircleIcon';
import getDateFromISO from '@shared/helpers/getDateFromISO';
import fullnameToInitials from '@shared/helpers/fullnameToInitials';
import CommentContextMenu from '@features/comments/ui/CommentContextMenu';
import React from 'react';
import MenuProvider from '@shared/providers/MenuProvider';

interface CommentItemProps {
  commentData: unknown;
}

export default function CommentItem({ commentData }) {
  const {
    createdAt,
    dislikesCount,
    likesCount,
    review,
    user,
    id: commentId,
    mediaId,
    mediaType,
  } = commentData;
  const { firstName, lastName, userAuth, id: commentUserId } = user;
  const { isEmailConfirmed } = userAuth;

  const userId: number | undefined = useSelector(selectUserMetaData)?.id;
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={4}>
      <Avatar {...fullnameToInitials(`${firstName} ${lastName}`)} />

      <Stack flexGrow={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontWeight="900" variant="h6" component="h3" mb={1} sx={{ mr: 1 }}>
              {firstName} {lastName}
            </Typography>
            {isEmailConfirmed && <MarkCircleIcon />}
          </Stack>
          {userId === commentUserId && (
            <MenuProvider>
              <CommentContextMenu
                commentId={commentId}
                mediaId={mediaId}
                mediaType={mediaType}
                currentReview={review}
              />
            </MenuProvider>
          )}
        </Stack>

        <Typography color={theme.palette.grey[300]}>{review}</Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={4} mb={1}>
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
          <Typography color={theme.palette.grey[300]}> {getDateFromISO(createdAt)}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
