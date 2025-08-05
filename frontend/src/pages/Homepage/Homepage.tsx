import { Divider, Stack } from '@mui/material';
import MediaSection from '@shared/ui/MediaSection';
import useHomepageMedia from '@features/homepage/hooks/useHomepageMedia';

const Homepage = () => {
  const { topRatedMovies, trendingMovies, trendingTv, tvAiringToday, isLoading } =
    useHomepageMedia();

  if (isLoading) return <div>Loading...</div>;

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
