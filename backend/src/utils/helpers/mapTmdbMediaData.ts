export default function mapTmdbMediaData(data: any) {
  return {
    runtime: data?.runtime ?? data?.episode_run_time?.[0] ?? 0,
    releaseDate: data?.release_date ?? data?.first_air_date ?? 'N/A',
    title: data?.title ?? data?.name ?? 'No title',
    posterPath: data?.poster_path,
    voteAverage: data?.vote_average ?? 0,
    totalEpisodes: data?.number_of_episodes ?? null,
    genres:
      data?.genres?.length > 0
        ? data?.genres.map((genre: { name: string; id: string }) => Number(genre.id))
        : [],
  };
}
