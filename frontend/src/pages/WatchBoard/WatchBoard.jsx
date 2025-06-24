import {Box, Stack, Typography} from "@mui/material";
import {DndContext} from '@dnd-kit/core';
import {useDroppable} from '@dnd-kit/core';
import {useState} from "react";
import MovieBoardItem from "../../shared/ui/MovieBoardItem";
import MovieBoardColumn from "../../shared/ui/MovieBoardColumn";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


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
    const columns = [
        {
            id: 1,
            label: 'Want to Watch',
            icon: <TurnedInNotOutlinedIcon />
        },
        {
            id: 2,
            label: 'Currently Watching',
            icon: <PlayCircleOutlineOutlinedIcon/>
        },
        {
            id: 3,
            label: "Watched",
            icon: <RemoveRedEyeOutlinedIcon/>
        },
        {
            id: 4,
            label: 'Favorites',
            icon: <FavoriteBorderOutlinedIcon/>
        },
        {
            id: 5,
            label: 'Archived',
            icon: <PlayCircleOutlineOutlinedIcon/>
        }
    ]


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
            <Stack direction="row">
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

                {columns.map(({id, icon, label}) => (
                    <MovieBoardColumn id={id} key={id} icon={icon} label={label}>
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
                    </MovieBoardColumn>
                ))}
            </Stack>

        </DndContext>
    )
}

export default WatchBoard




