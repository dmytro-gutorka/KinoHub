import { Avatar, Stack, Typography, useTheme } from '@mui/material';
import { selectUserMetaData } from '@features/auth/model/selectors';
import { useSelector } from 'react-redux';
import CommentActionButtonList from '@features/comments/ui/CommentActionButtonList';
import fullnameToInitials from '@shared/helpers/fullnameToInitials';
import MarkCircleIcon from '@shared/icons/MarkCircleIcon';
import getDateFromISO from '@shared/helpers/getDateFromISO';
import MenuProvider from '@shared/providers/MenuProvider';
import React from 'react';
// import CommentContextMenu from '@features/comments/ui/CommentContextMenu';

export default function CommentItem({ commentData }) {
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
  } = commentData;
  const { firstName, lastName, userAuth, id: commentUserId } = user;
  const { isEmailConfirmed } = userAuth;

  const userId: number | undefined = useSelector(selectUserMetaData)?.id;
  const theme = useTheme();

  let prevUserVote;
  if (votes.length > 0) prevUserVote = votes.find((v) => v.userId === userId)?.vote;

  return (
    <Stack direction="row" spacing={4}>
      <Avatar {...fullnameToInitials(`${firstName} ${lastName}`)} />

      {/*<Stack flexGrow={1}>*/}
      {/*  <Stack direction="row" alignItems="center" justifyContent="space-between">*/}
      {/*    <Stack direction="row" spacing={1} alignItems="center">*/}
      {/*      <Typography fontWeight="900" variant="h6" component="h3" mb={1} sx={{ mr: 1 }}>*/}
      {/*        {firstName} {lastName}*/}
      {/*      </Typography>*/}
      {/*      {isEmailConfirmed && <MarkCircleIcon />}*/}
      {/*    </Stack>*/}
      {/*    {userId === commentUserId && (*/}
      {/*      <MenuProvider>*/}
      {/*        <CommentContextMenu*/}
      {/*          commentId={commentId}*/}
      {/*          mediaId={mediaId}*/}
      {/*          mediaType={mediaType}*/}
      {/*          currentReview={review}*/}
      {/*        />*/}
      {/*      </MenuProvider>*/}
      {/*    )}*/}
      {/*  </Stack>*/}
      {/*  <Typography color={theme.palette.grey[300]}>{review}</Typography>*/}

      {/*  <Stack direction="row" justifyContent="space-between" alignItems="center" mt={4} mb={1}>*/}
      {/*    <CommentActionButtonList*/}
      {/*      dislikesCount={dislikesCount}*/}
      {/*      likesCount={likesCount}*/}
      {/*      commentId={commentId}*/}
      {/*      mediaType={mediaType}*/}
      {/*      mediaId={mediaId}*/}
      {/*      prevUserVote={prevUserVote}*/}
      {/*    />*/}
      {/*    <Typography color={theme.palette.grey[300]}> {getDateFromISO(createdAt)}</Typography>*/}
      {/*  </Stack>*/}
      {/*</Stack>*/}
    </Stack>
  );
}
