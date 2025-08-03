import { Stack, useTheme } from '@mui/material';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { MovieBoardColumn, MovieBoardItem } from '@features/movieBoard';

export default function MovieBoardColumnList({ mediaItems }) {
  const theme = useTheme();

  const columns = [
    {
      id: 'toWatch',
      label: 'Want to Watch',
      icon: <TurnedInNotOutlinedIcon />,
      bgColor: theme.palette.gradientBlue,
    },
    {
      id: 'isWatching',
      label: 'Currently Watching',
      icon: <PlayCircleOutlineOutlinedIcon />,
      bgColor: theme.palette.gradientOrange,
    },
    {
      id: 'onHold',
      label: 'Watched',
      icon: <RemoveRedEyeOutlinedIcon />,
      bgColor: theme.palette.gradientGreen,
    },
    {
      id: 'favorites',
      label: 'Favorites',
      icon: <FavoriteBorderOutlinedIcon />,
      bgColor: theme.palette.gradientRed,
    },
    {
      id: 'archived',
      label: 'Archived',
      icon: <PlayCircleOutlineOutlinedIcon />,
      bgColor: theme.palette.gradientGrey,
    },
  ];

  return (
    <Stack direction="row" gap={4}>
      {columns.map((columnData) => (
        <MovieBoardColumn key={columnData.id} mediaItems={mediaItems} columnData={columnData}>
          <Stack gap={2}>
            {mediaItems
              ?.filter((item) => item.watchStatus === columnData.id)
              ?.map((item) => <MovieBoardItem key={item.mediaId} mediaData={item.mediaInfo} />)}
          </Stack>
        </MovieBoardColumn>
      ))}
    </Stack>
  );
}
