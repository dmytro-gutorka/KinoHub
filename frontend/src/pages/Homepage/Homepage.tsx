import { Divider, Stack } from '@mui/material';
import useHomepageMedia from '@shared/hooks/useHomepageMedia';
import MediaSection from '@features/media/ui/MediaSection';

const Homepage = () => {
  const { topRatedMovies, trendingMovies, trendingTv, tvAiringToday, isLoading } =
    useHomepageMedia();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack m={10} mt={0} rowGap={10} divider={<Divider orientation="horizontal" />}>
      <MediaSection mediaList={topRatedMovies} sectionTitle="Top Rated Movies" />
      <MediaSection mediaList={trendingMovies} sectionTitle="Trending Movies" />
      <MediaSection mediaList={trendingTv} sectionTitle="Trending TV Show" />
      <MediaSection mediaList={tvAiringToday} sectionTitle="TV show airing today" />
    </Stack>
  );
};

export default Homepage;
