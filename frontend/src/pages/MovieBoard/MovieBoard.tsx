import { Stack } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import useUpdateMovieBoardItem from '@features/movieBoard/hooks/useUpdateMovieBoardItem';
import useMovieBoardItems from '@features/movieBoard/hooks/useMovieBoardItems';
import MovieBoardColumnList from '@features/movieBoard/ui/MovieBoardColumnList';

const MovieBoard = () => {
  const { data: mediaItems, isSuccess } = useMovieBoardItems();
  const { mutate: updateAction } = useUpdateMovieBoardItem();

  function handleDragEnd(event) {
    if (event.over === null) return;

    updateAction({
      mediaId: event.active.id,
      mediaType: event.active?.data?.current?.mediaType,
      action: { watchStatus: event.over.id },
    });
  }

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Stack m={10}>
        <MovieBoardColumnList mediaItems={mediaItems} />
      </Stack>
    </DndContext>
  );
};

export default MovieBoard;
