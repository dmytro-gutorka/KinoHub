import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getTmdbEpisodeList from '@shared/api/tmdb/services/getTmdbEpisodeList';
import getEpisodeListActions from '@shared/api/kinohub/services/episode/getEpisodeActionList';

export default function useEpisodeList(tvShowId: number, seasonNumber: number) {
  const { data: episodesData, isSuccess: is2 } = useQuery({
    queryKey: ['episodes', tvShowId, seasonNumber],
    queryFn: () => getTmdbEpisodeList(tvShowId, seasonNumber),
    staleTime: 0,
  });

  const { data: episodesActions, isSuccess: is1 } = useQuery<Array<EpisodeEntity>>({
    queryKey: ['episodesActions', tvShowId, seasonNumber],
    queryFn: async () => getEpisodeListActions(tvShowId, seasonNumber),
    staleTime: 0,
    retry: false,
  });

  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    const mergedEpisodes = episodesData?.episodes?.map((ed) => {
      const isWatched = episodesActions?.find(
        (ea) => ea.episode === ed.episode_number && ea.season === ed.season_number
      );

      return { ...ed, isWatched: !!isWatched };
    });

    setEpisodes(mergedEpisodes);
  }, [episodesActions, episodesData]);

  return {
    episodes,
  };
}
