import useTopRaterMovies from '../../features/movies/hooks/useTopRaterMovies';
import usePopularMovies from '../../features/movies/hooks/usePopularMovies';
import useUpcomingMovies from '../../features/movies/hooks/useUpcomingMovies';
import useNowPlayingMovies from '../../features/movies/hooks/useNowPlayingMovies';
import MoviePreviewCard from '../../features/movies/components/MoviesPreview';

const Homepage = () => {
  const { data: topRatedMovies, isLoading, isError } = useTopRaterMovies();
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

  console.log(topRatedMovies.results);

  return (
    <div>
      {topRatedMovies?.results.map((movie) => (
        <MoviePreviewCard movie={movie} />
      ))}
    </div>
  );
};

export default Homepage;
