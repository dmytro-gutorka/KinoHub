import { Stack } from "@mui/material";
import { DndContext } from '@dnd-kit/core';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import updateMovieBoardItemStatus from "../../features/movies/api/updateMovieBoardItemStatus";
import getMovieBoardMediaItems from "../../shared/api/getMovieBoardMediaItems";
import MovieBoardItem from "../../shared/ui/MovieBoardItem";
import MovieBoardColumn from "../../shared/ui/MovieBoardColumn";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import useMovieBoardItemStatus from "../../features/movies/hooks/useMovieBoardItemStatus";


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
        id: 'favorites',
        label: 'Favorites',
        icon: <FavoriteBorderOutlinedIcon/>
    },
    {
        id: 'archived',
        label: 'Archived',
        icon: <PlayCircleOutlineOutlinedIcon/>
    }
]


const WatchBoard = () => {

    const { data : mediaItems, isSuccess } = useQuery({
        queryKey: ['movieBoardMediaItems'],
        queryFn: getMovieBoardMediaItems
    })

    const watchBoardStatus = useMovieBoardItemStatus()

    function handleDragEnd(event) {
        const {over, active} = event
        watchBoardStatus.mutate({ watchStatus: over.id, mediaId: active.id})
    }

    if (!isSuccess) return <div>Loading...</div>


    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Stack direction="row">
                <Stack rowGap={2}>
                    {mediaItems
                        ?.filter(item => item.parent === null)
                        ?.map(item => (
                            <MovieBoardItem
                                key={item.movieId}
                                id={item.movieId}
                                posterPath="Movie poster URL"
                                title="Movie Title"
                            />
                        ))}
                </Stack>

                {columns.map(({id, icon, label}) => (
                    <MovieBoardColumn id={id} key={id} icon={icon} label={label}>
                        <Stack>{mediaItems
                            ?.filter(item => item.watchStatus === id)
                            ?.map(item => (
                                <MovieBoardItem
                                    key={item.movieId}
                                    id={item.movieId}
                                    posterPath="Movie poster URL"
                                    title="Movie Title"
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




