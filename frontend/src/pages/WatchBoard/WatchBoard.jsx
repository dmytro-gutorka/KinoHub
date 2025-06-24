import { Stack } from "@mui/material";
import { DndContext } from '@dnd-kit/core';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import getMovieBoardMediaItems from "../../shared/api/getMovieBoardMediaItems";
import MovieBoardItem from "../../shared/ui/MovieBoardItem";
import MovieBoardColumn from "../../shared/ui/MovieBoardColumn";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import updateMovieBoardItemStatus from "../../features/movies/api/updateMovieBoardItemStatus";
import updateMediaAction from "../../features/movies/api/updateMediaAction";
import {getActionForURL} from "../../shared/helpers/getActionForURL";

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
// setItems(prev => prev.map(item => item.id === active.id
//     ? { ...item, parent: over ? over.id : null }
//     : item
// ))

const WatchBoard = () => {

    const { data : mediaItems, isSuccess } = useQuery({
        queryKey: ['movieBoardMediaItems'],
        queryFn: getMovieBoardMediaItems
    })

    const queryClient = useQueryClient();

    const watchBoardStatus = useMutation({
        mutationFn: ({ watchStatus, mediaId }) => updateMovieBoardItemStatus(watchStatus, mediaId),
        onSettled: (_, variables) => queryClient.invalidateQueries({
            queryKey: ["movieBoardMediaItems", variables.mediaId]}),
        onError: (err, variables , context) => queryClient.setQueryData(
            ["movieBoardMediaItems", variables.mediaId], context.prevData),
        onMutate: async ( variables ) => {
            await queryClient.cancelQueries(["movieBoardMediaItems", variables.mediaId])
            const prevData = queryClient.getQueryData(["movieBoardMediaItems", variables.mediaId])

            queryClient.setQueryData(["movieBoardMediaItems", variables.mediaId],
                    old => ({ ...old, ...variables }))

            return { prevData }
        }}
    )

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




