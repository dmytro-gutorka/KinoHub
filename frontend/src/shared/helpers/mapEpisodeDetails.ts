export default function mapEpisodesDetails(episodes: [any]) {
  return episodes.map((episode) => {
    return {
      episode: episode.episode_number,
      season: episode.season_number,
      runtime: episode.runtime || 0,
      mediaType: 'tv',
    };
  });
}
