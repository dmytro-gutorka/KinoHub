import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';
import { Button, IconButton, Stack } from '@mui/material';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { ReactElement } from 'react';
import useUpdateMediaAction from '@features/media/hooks/useUpdateMediaAction';

interface ActionButton {
  label: null | string;
  icon: ReactElement;
  onClick: () => void;
  skip?: boolean;
}

interface MediaActionButtonListProps {
  mediaActions: UserMediaActionEntity;
  mediaId: number;
  mediaType: MediaType;
  youtubeVideoKey: string;
}

export default function MediaActionButtonList({
  mediaActions,
  mediaId,
  mediaType,
  youtubeVideoKey,
}: MediaActionButtonListProps) {
  const { isLiked, isWatched, watchStatus } = mediaActions;
  const { mutate: updateAction } = useUpdateMediaAction(mediaId, mediaType);

  const handleMediaAction = (action: Partial<MediaUserActions>) => updateAction(action);

  const actionButtons: Array<ActionButton> = [
    {
      icon: <PlayCircleOutlineOutlinedIcon />,
      onClick: () => window.open(`https://www.youtube.com/watch?v=${youtubeVideoKey}`, '_blank'),
      label: 'Watch trailer',
      skip: !youtubeVideoKey,
    },
    {
      icon: isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />,
      onClick: () => handleMediaAction({ isLiked: !isLiked }),
      label: 'Add to Favorites',
    },
    {
      icon: watchStatus ? <BookmarkAddedIcon /> : <BookmarkAddOutlinedIcon />,
      onClick: () => handleMediaAction({ watchStatus: watchStatus ? null : 'toWatch' }),
      label: 'Add to MovieBoard',
    },
    {
      icon: isWatched ? <VisibilityIcon /> : <VisibilityOffOutlinedIcon />,
      onClick: () => handleMediaAction({ isWatched: !isWatched }),
      label: 'Mark as watched',
    },
  ];

  return (
    <Stack direction="row" gap={4} mt={8} flexWrap="wrap">
      {actionButtons.map(({ label, icon, onClick, skip }: ActionButton) => (
        <React.Fragment key={label}>
          {!skip && (
            <>
              {!label && <IconButton onClick={onClick}>{icon}</IconButton>}
              {label && (
                <Button variant="outlined" onClick={onClick} startIcon={icon}>
                  {label}
                </Button>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
}
