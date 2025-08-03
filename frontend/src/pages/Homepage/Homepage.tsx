import { Divider, Stack } from '@mui/material';
import MediaSection from '../../shared/ui/MediaSection';
import useHomepageMedia from '@features/homepage/hooks/useHomepageMedia';

const Homepage = () => {
  const { data: homepageMediaData, isLoading, isError } = useHomepageMedia();

  if (isLoading) return <div>Loading....</div>;

  if (isError) return <div>Error {isError}</div>;

  const topRatedMovies =
    homepageMediaData?.[0]?.status === 'fulfilled' ? homepageMediaData[0]?.value?.results : [];
  const trendingMovies =
    homepageMediaData?.[1]?.status === 'fulfilled' ? homepageMediaData[1]?.value?.results : [];
  const trendingTv =
    homepageMediaData?.[2]?.status === 'fulfilled' ? homepageMediaData[2]?.value?.results : [];
  const tvAiringToday =
    homepageMediaData?.[3]?.status === 'fulfilled' ? homepageMediaData[3]?.value?.results : [];

  return (
    <Stack m={10} mt={0} rowGap={10} divider={<Divider orientation="horizontal" />}>
      <MediaSection mediaList={topRatedMovies} title="Top Rated Movies" />
      <MediaSection mediaList={trendingMovies} title="Trending Movies" />
      <MediaSection mediaList={trendingTv} title="Trending TV Show" />
      <MediaSection mediaList={tvAiringToday} title="TV show airing today" />
    </Stack>
  );
};

export default Homepage;
