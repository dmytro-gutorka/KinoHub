import { Stack, useTheme } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import { useQuery } from '@tanstack/react-query';
import getWatchBoardMedia from '@shared/api/kinohub/getWatchBoardMedia';
import MovieBoardItem from '../../entities/movieBoard/ui/MovieBoardItem';
import MovieBoardColumn from '../../entities/movieBoard/ui/MovieBoardColumn';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import useMovieBoardItemStatus from '../../shared/hooks/useMovieBoardItemStatus';

const MovieBoard = () => {
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

  const { data: mediaItems, isSuccess } = useQuery({
    queryKey: ['movieBoardMediaItems'],
    queryFn: getWatchBoardMedia,
    staleTime: 5 * 1000,
  });

  const watchBoardStatus = useMovieBoardItemStatus();

  function handleDragEnd(event) {
    const { over, active } = event;
    watchBoardStatus.mutate({ watchStatus: over.id, mediaId: active.id });
  }

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Stack m={10}>
        <Stack direction="row" gap={4}>
          <Stack>
            {mediaItems
              ?.filter((item) => item.parent === null)
              ?.map((item) => (
                <MovieBoardItem
                  key={item.movieId}
                  id={item.movieId}
                  posterPath={item.posterPath}
                  title={item.title}
                  runtime={item.runtime}
                  voteAverage={item.voteAverage}
                  releaseDate={item.releaseDate}
                />
              ))}
          </Stack>

          {columns.map(({ id, icon, label, bgColor }) => (
            <MovieBoardColumn id={id} key={id} icon={icon} label={label} bgColor={bgColor}>
              <Stack gap={2}>
                {mediaItems
                  ?.filter((item) => item.watchStatus === id)
                  ?.map((item) => (
                    <MovieBoardItem
                      key={item.movieId}
                      id={item.movieId}
                      posterPath={item.posterPath}
                      title={item.title}
                      runtime={item.runtime}
                      voteAverage={item.voteAverage}
                      releaseDate={item.releaseDate}
                    />
                  ))}
              </Stack>
            </MovieBoardColumn>
          ))}
        </Stack>
      </Stack>
    </DndContext>
  );
};

export default MovieBoard;
