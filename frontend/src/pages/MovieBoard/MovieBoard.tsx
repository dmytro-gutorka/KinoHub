import { WatchStatus } from '@shared/types/generalTypes';
import { DragEndEvent, DndContext } from '@dnd-kit/core';
import { Stack } from '@mui/material';
import { MovieBoardColumnList } from '@features/movieBoard';
import useUpdateMovieBoardItem from '@features/movieBoard/hooks/useUpdateMovieBoardItem';
import useMovieBoardItems from '@features/movieBoard/hooks/useMovieBoardItems';

const MovieBoard = () => {
  const { data: movieBoardItems, isSuccess } = useMovieBoardItems();
  const { mutate: updateAction } = useUpdateMovieBoardItem();

  function handleDragEnd(event: DragEndEvent) {
    if (event.over === null) return;

    const mediaId = Number(event.active.id);
    const watchStatus = event.over.id as WatchStatus;

    updateAction({
      mediaId,
      mediaType: event.active?.data?.current?.mediaType,
      action: { watchStatus },
    });
  }

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Stack m={10}>
        <MovieBoardColumnList movieBoardItems={movieBoardItems} />
      </Stack>
    </DndContext>
  );
};

export default MovieBoard;
