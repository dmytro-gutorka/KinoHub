import useTopRatedMovies from '../../features/movies/hooks/useTopRatedMovies';
import usePopularMovies from '../../features/movies/hooks/usePopularMovies';
import useUpcomingMovies from '../../features/movies/hooks/useUpcomingMovies';
import useNowPlayingMovies from '../../features/movies/hooks/useNowPlayingMovies';
import MediaSection from '../../shared/ui/MediaSection';

import { Divider, Stack } from '@mui/material';

const Homepage = () => {
  const { data: topRatedMovies, isLoading, isError } = useTopRatedMovies();
  // const { data: popularMovies } = usePopularMovies();
  // const { data: nowPlayingMovies } = useNowPlayingMovies();
  // const { data: upcomingMovies } = useUpcomingMovies();

  // if (popularMovies) {
  //   console.log(popularMovies);
  // }
  //
  // if (nowPlayingMovies) {
  //   console.log(nowPlayingMovies);
  // }
  //
  // if (upcomingMovies) {
  //   console.log(upcomingMovies);
  // }

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading data</div>;

  return (
    <Stack rowGap={5} divider={<Divider orientation="horizontal" />}>
      <MediaSection movieData={topRatedMovies.results} title="Now Playing" />
      <MediaSection movieData={topRatedMovies.results} title="Popular" />
      <MediaSection movieData={topRatedMovies.results} title="Top Rated" />
      <MediaSection movieData={topRatedMovies.results} title="Upcomming" />
    </Stack>
  );
};

export default Homepage;
