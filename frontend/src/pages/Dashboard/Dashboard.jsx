import {useQuery} from "@tanstack/react-query";
import getUserStats from "../../widgets/Dashboard/api/getUserStats";
import getNumberOfWatchedEpisodes from "../../shared/helpers/getNumberOfWatchedEpisodes";
import getNumberOfWatchedMedia from "../../shared/helpers/getNumberOfWatchedMedia";
import getAvgRating from "../../shared/helpers/getAvgRating";
import getAvgRuntime from "../../shared/helpers/getAvgRuntime";
import {Box, Stack, Typography} from "@mui/material";
import MovieOutlineIcon from "../../shared/icons/MovieOutlineIcon";
import TvShowOutlineIcon from "../../shared/icons/TvShowOutlineIcon";


const Dashboard = () => {
    const { data: userStats, isSuccess } = useQuery({
        queryKey: ['userStats'],
        queryFn: getUserStats,
        staleTime: 5 * 1000
    })

    if (!isSuccess) return <div>Loading...</div>

    const NumberOfWatchedMovies = getNumberOfWatchedMedia(userStats, 'movie')
    const NumberOfWatchedTvShows = getNumberOfWatchedMedia(userStats, 'tv')
    const NumberOfWatchedEpisodes = getNumberOfWatchedEpisodes(userStats)

    const avgRating = getAvgRating(userStats)
    const avgRuntime = getAvgRuntime(userStats)

    console.log(NumberOfWatchedMovies)
    console.log(NumberOfWatchedTvShows)
    console.log(NumberOfWatchedEpisodes)
    console.log(avgRating)
    console.log(avgRuntime)

    console.log(userStats)

    return (
        <Stack>
            <Stack direction="row">
                <Box>
                    <MovieOutlineIcon />
                    <TvShowOutlineIcon/>

                </Box>
            </Stack>
            <Typography>{NumberOfWatchedMovies}</Typography>
            <Typography>Movies Watched</Typography>
            <Typography>This month</Typography>
        </Stack>
    )
}

export default Dashboard