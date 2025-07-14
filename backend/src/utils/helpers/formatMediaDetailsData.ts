export function formatMediaDetailsData(data: any) {
  const {
    first_air_date,
    vote_average,
    backdrop_path,
    name,
    episode_run_time,
    runtime,
    original_title,
    release_date,
  } = data;

  return {
    runtime: episode_run_time?.[0] || runtime,
    releaseDate: first_air_date || release_date,
    title: name || original_title,
    posterPath: backdrop_path || '',
    voteAverage: vote_average,
  };
}
