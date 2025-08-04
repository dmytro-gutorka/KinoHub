import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Stack } from '@mui/material';
import { JSX } from 'react';
import LabelWithIcon from '../LabelWithIcon';
import useUpdateMediaAction from '@features/media/model/hooks/useUpdateMediaAction';

interface ActionButton {
  label: null | string;
  icon: JSX.Element;
  onClick: null | (() => void);
}

interface MediaActionButtonListProps {
  mediaActions: UserMediaActionEntity;
  mediaId: number;
  mediaType: MediaType;
}

export default function MediaActionButtonList({
  mediaActions,
  mediaId,
  mediaType,
}: MediaActionButtonListProps) {
  const { isLiked, isWatched, watchStatus } = mediaActions;
  const { mutate: updateAction } = useUpdateMediaAction(mediaId, mediaType);

  const handleMediaAction = (action: Partial<MediaUserActions>) => updateAction(action);

  const actionButtons: Array<ActionButton> = [
    {
      icon: <PlayCircleOutlineOutlinedIcon />,
      onClick: null,
      label: 'Watch trailer',
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
      label: null,
    },
  ];

  return (
    <Stack direction="row" spacing={4} mt={8}>
      {actionButtons.map(({ label, icon, onClick }, index) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Button onClick={onClick} key={index}>
          {label && (
            <LabelWithIcon key={index} label={label}>
              {icon}
            </LabelWithIcon>
          )}

          {!label && icon}
        </Button>
      ))}
    </Stack>
  );
}
