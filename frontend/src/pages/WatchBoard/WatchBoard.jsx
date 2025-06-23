import {Box, Stack, Typography} from "@mui/material";
import {DndContext} from '@dnd-kit/core';
import {useDroppable} from '@dnd-kit/core';
import {useState} from "react";
import MovieBoardItem from "../../shared/ui/MovieBoardItem";


export function Droppable({id, children}) {
    const {isOver, setNodeRef} = useDroppable({id});

    const style = {
        backgroundColor: isOver ? '#e0ffe0' : '#f0f0f0',
        width: '150px',
        minHeight: '150px',
        border: '1px solid gray',
    };

    return (
        <Box ref={setNodeRef} style={style}>
            {children}
        </Box>
    );
}

const initialItems = [
    {
        posterPath: '/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
        id: 1,
        title: "Movie 1",
        ratings: 8.71,
        runtime: 120,
        parent: null
    },
    {
        posterPath: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
        id: 2,
        title: "Movie 2",
        ratings: 7.61,
        runtime: 213,
        parent: null

    },
    {
        posterPath: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
        id: 3,
        title: "Movie 3",
        ratings: 5,
        runtime: 95,
        parent: null

    }
]


const WatchBoard = () => {
    const columns = ['To Watch', 'Watching', 'Watched', 'Favorites', 'Archive']
    const [items, setItems] = useState(initialItems)

    function handleDragEnd(event) {
        const {over, active} = event

        setItems(prev => prev.map(item => item.id === active.id
            ? { ...item, parent: over ? over.id : null }
            : item
        ))
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Box>
                {items
                    .filter(item => item.parent === null)
                    .map(item => (
                        <MovieBoardItem
                            key={item.id}
                            id={item.id}
                            posterPath={item.posterPath}
                            title={item.title}
                        />
                    ))
                }
            </Box>

            {columns.map(id => (
                <Droppable id={id} key={id}>
                    <Typography variant="h5">{id}</Typography>
                    <Stack>{items
                        .filter(item => item.parent === id)
                        .map(item => (
                            <MovieBoardItem
                                key={item.id}
                                id={item.id}
                                posterPath={item.posterPath}
                                title={item.title}
                            />
                        ))
                    }
                    </Stack>
                </Droppable>
            ))}
        </DndContext>
    )

}

export default WatchBoard




