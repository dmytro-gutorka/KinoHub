import { useQuery } from '@tanstack/react-query';
import getWatchedEpisodesCount from '@shared/api/episode/getWatchedEpisodesCount';

export default function useWatchedEpisodesPerSeason(tvShowId: number) {
  const queryKey = ['watchedEpisodesPerSeason', tvShowId];

  return useQuery({
    queryKey,
    queryFn: () => {
      return getWatchedEpisodesCount(tvShowId);
    },
  });
}
