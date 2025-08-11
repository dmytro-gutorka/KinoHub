import { Avatar, IconButton, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import MarkCircleIcon from '@shared/icons/MarkCircleIcon';
import getDateFromISO from '@shared/helpers/getDateFromISO';
import fullnameToInitials from '@shared/helpers/fullnameToInitials';
import React, { useState } from 'react';

interface CommentItemProps {
  commentData: unknown;
}

export default function CommentItem({ commentData }) {
  const { createdAt, dislikesCount, likesCount, review, user } = commentData;
  const { firstName, lastName, userAuth } = user;
  const { isEmailConfirmed } = userAuth;

  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(anchorEl);

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
          <>
            <IconButton onClick={handleClick}>
              <MoreHorizIcon
                id="comment-actions-button"
                aria-controls={open ? 'comment-actions-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              />
            </IconButton>
            <Menu
              id="comment-actions-menu"
              aria-labelledby="comment-actions-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={handleClose}>Delete comment</MenuItem>
              <MenuItem onClick={handleClose}>Update comment</MenuItem>
            </Menu>
          </>
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
