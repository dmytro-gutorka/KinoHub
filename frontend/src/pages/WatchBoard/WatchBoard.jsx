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


const initialItems = [
    {
        posterPath: '/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
        id: 1,
        title: "Movie 1",
        ratings: 8.71,
        runtime: 120,
        parent: 'toWatch'
    },
    {
        posterPath: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
        id: 2,
        title: "Movie 2",
        ratings: 7.61,
        runtime: 213,
        parent: 'toWatch'

    },
    {
        posterPath: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
        id: 3,
        title: "Movie 3",
        ratings: 5,
        runtime: 95,
        parent: 'toWatch'

    }
]

const WatchBoard = () => {
    const columns = [
        {
            id: 'toWatch',
            label: 'Want to Watch',
            icon: <TurnedInNotOutlinedIcon />
        },
        {
            id: 'isWatching',
            label: 'Currently Watching',
            icon: <PlayCircleOutlineOutlinedIcon/>
        },
        {
            id: 'onHold',
            label: "Watched",
            icon: <RemoveRedEyeOutlinedIcon/>
        },
        {
            id: 'watched',
            label: 'Favorites',
            icon: <FavoriteBorderOutlinedIcon/>
        },
        {
            id: 'archived',
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
                <Stack rowGap={2}>
                    {items
                        .filter(item => item.parent === null)
                        .map(item => (
                            <MovieBoardItem
                                key={item.id}
                                id={item.id}
                                posterPath={item.posterPath}
                                title={item.title}
                            />
                        ))}
                </Stack>

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
                            ))}
                        </Stack>
                    </MovieBoardColumn>
                ))}
            </Stack>

        </DndContext>
    )
}

export default WatchBoard




