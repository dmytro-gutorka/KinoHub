import { useQuery } from '@tanstack/react-query';
import getTmdbEpisodeList from '@shared/api/tmdb/services/getTmdbEpisodeList';

export default function useEpisodeList(tvShowId: number, seasonNumber: number) {
  const { data } = useQuery({
    queryKey: ['tvShowSeasonDetails', tvShowId, seasonNumber],
    queryFn: () => getTmdbEpisodeList(tvShowId, seasonNumber),
    staleTime: 0,
  });

  return {
    episodeList: data?.episodes,
  };
}
