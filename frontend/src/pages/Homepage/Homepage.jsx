import MediaSection from '../../shared/ui/MediaSection';
import getHomepageMediaData from "../../widgets/Homepage/api/getHomepageMediaData";
import {useQuery} from "@tanstack/react-query";

import { Divider, Stack } from '@mui/material';
import {TMDB_ENDPOINTS} from "../../app/constants";

const Homepage = () => {

    const { data: homepageMediaData } = useQuery({
        queryKey: ['homepageMedia'],
        queryFn: () => {
            return Promise.allSettled([
                getHomepageMediaData(TMDB_ENDPOINTS.MOVIE_TOP_RATED),
                getHomepageMediaData(TMDB_ENDPOINTS.TRENDING_MOVIES),
                getHomepageMediaData(TMDB_ENDPOINTS.TRENDING_TV),
                getHomepageMediaData(TMDB_ENDPOINTS.TV_AIRING_TODAY)
            ])
        }
    })

    if (!homepageMediaData?.length) return <div>Loading....</div>

        return (
            <Stack m={10} rowGap={10} divider={<Divider orientation="horizontal" />}>
                <MediaSection mediaData={homepageMediaData?.at(0).value.results} title="Top Rated Movies" />
                <MediaSection mediaData={homepageMediaData?.at(1).value.results} title="Trending Movies" />
                <MediaSection mediaData={homepageMediaData?.at(2).value.results} title="Trending TV Show" />
                <MediaSection mediaData={homepageMediaData?.at(3).value.results} title="TV show airing today" />
            </Stack>
        )
};

export default Homepage;
