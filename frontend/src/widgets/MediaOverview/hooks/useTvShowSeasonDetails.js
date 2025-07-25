import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import getTvShowSeasonDetails from '@shared/api/tmdb/services/getSeasonDetails';
import createMediaAction from '@shared/api/kinohub/services/createMediaAction';
import parseEpisodesData from '../../../shared/helpers/parseEpisodeData';
import getEpisodeActions from '@shared/api/kinohub/services/getEpisodeAction';

export default function useTvShowSeasonDetails(tvShowId, tvSeason) {
  const { data: data, isSuccess } = useQuery({
    queryKey: ['tvShowSeasonDetails', tvShowId, tvSeason],
    queryFn: () => getTvShowSeasonDetails(tvShowId, tvSeason),
    staleTime: 0,
  });

  useEffect(() => {
    if (!isSuccess || !data?.episodes) return;
    (async () => {
      await createMediaAction(tvShowId, parseEpisodesData(data.episodes), true);
    })();
  }, [isSuccess, data, tvShowId]);

  const { data: episodeMediaData, isLoading } = useQuery({
    queryKey: ['tvShowSeasonActions', tvShowId, tvSeason],
    queryFn: () => getEpisodeActions(tvShowId, tvSeason),
    select: (episodes) => episodes.map(({ isWatched }) => ({ isWatched: isWatched })),
    staleTime: 0,
    enabled: isSuccess,
  });

  let episodesData = [];

  if (data?.episodes?.length && episodeMediaData?.length) {
    episodesData = data.episodes.map((episode, i) => ({ ...episode, ...episodeMediaData[i] }));
  }

  return { episodesData, isSuccess, isLoading };
}
