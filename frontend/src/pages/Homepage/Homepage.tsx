import { Stack } from '@mui/material';
import useHomepageMedia from '@shared/hooks/useHomepageMedia';
import MediaSection from '@features/media/ui/MediaSection';

const Homepage = () => {
  const { topRatedMovies, trendingMovies, trendingTv, tvAiringToday, isLoading } =
    useHomepageMedia();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack m={10} rowGap={20}>
      <MediaSection mediaList={topRatedMovies} mediaType="movie" sectionTitle="Top Rated Movies" />
      <MediaSection mediaList={trendingMovies} mediaType="movie" sectionTitle="Trending Movies" />
      <MediaSection mediaList={trendingTv} mediaType="tv" sectionTitle="Trending TV Show" />
      <MediaSection mediaList={tvAiringToday} mediaType="tv" sectionTitle="TV show airing today" />
    </Stack>
  );
};

export default Homepage;
