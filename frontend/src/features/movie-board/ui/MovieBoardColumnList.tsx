import { Stack, useTheme } from '@mui/material';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { MovieBoardColumn, MovieBoardItem } from '@features/movie-board';
import {
  MovieBoardColumnData,
  MovieBoardColumnListProps,
} from '@features/movie-board/model/types/movieBoardTypes';

export default function MovieBoardColumnList({ movieBoardItems }: MovieBoardColumnListProps) {
  const theme = useTheme();

  const columns: Array<MovieBoardColumnData> = [
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
        <MovieBoardColumn
          key={columnData.id}
          movieBoardItems={movieBoardItems}
          columnData={columnData}
        >
          <Stack gap={2}>
            {movieBoardItems
              ?.filter((item) => item.watchStatus === columnData.id)
              ?.map((item) => <MovieBoardItem key={item.mediaId} mediaInfo={item.mediaInfo} />)}
          </Stack>
        </MovieBoardColumn>
      ))}
    </Stack>
  );
}
