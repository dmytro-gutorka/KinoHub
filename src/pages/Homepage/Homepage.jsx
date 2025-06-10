import useTopRaterMovies from '../../features/movies/hooks/useTopRaterMovies';
import usePopularMovies from '../../features/movies/hooks/usePopularMovies';
import useUpcomingMovies from '../../features/movies/hooks/useUpcomingMovies';
import useNowPlayingMovies from '../../features/movies/hooks/useNowPlayingMovies';

const Homepage = () => {
  const { data: topRatedMovies } = useTopRaterMovies();
  const { data: popularMovies } = usePopularMovies();
  const { data: nowPlayingMovies } = useNowPlayingMovies();
  const { data: upcomingMovies } = useUpcomingMovies();

  if (topRatedMovies) {
    console.log(topRatedMovies);
  }

  if (popularMovies) {
    console.log(popularMovies);
  }

  if (nowPlayingMovies) {
    console.log(nowPlayingMovies);
  }

  if (upcomingMovies) {
    console.log(upcomingMovies);
  }

  return <div>Homepage</div>;
};

export default Homepage;
