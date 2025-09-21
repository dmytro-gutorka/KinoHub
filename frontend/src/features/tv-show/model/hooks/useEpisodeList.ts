import { TmdbEpisodeInfo } from '@entities/types/tmdbEntities';
import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { Params, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getTmdbEpisodeList from '@shared/api/tmdb/services/getTmdbEpisodeList';
import getEpisodeListActions from '@shared/api/kinohub/services/episode/getEpisodeActionList';

export default function useEpisodeList(seasonNumber: number) {
  const [episodes, setEpisodes] = useState(null);
  const params: Readonly<Params<string>> = useParams();
  const tvShowId: number = Number(params?.id);

  const { data: episodesData } = useQuery({
    queryKey: ['episodes', tvShowId, seasonNumber],
    queryFn: () => getTmdbEpisodeList(tvShowId, seasonNumber),
    staleTime: 0,
  });

  const { data: episodesActions } = useQuery<Array<EpisodeEntity>>({
    queryKey: ['episodesActions', tvShowId, seasonNumber],
    queryFn: async () => getEpisodeListActions(tvShowId, seasonNumber),
    staleTime: 0,
    retry: false,
  });

  useEffect(() => {
    const mergedEpisodes = episodesData?.episodes?.map((ed: TmdbEpisodeInfo) => {
      const isWatched = episodesActions?.find(
        (ea) => ea.episode === ed.episode_number && ea.season === ed.season_number
      );
      return { ...ed, isWatched: !!isWatched };
    });

    setEpisodes(mergedEpisodes);
  }, [episodesActions, episodesData]);

  return { episodes };
}
