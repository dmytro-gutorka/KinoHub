import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import getTvShowSeasonDetails from '@shared/api/TMDB/getSeasonDetails';
import createMediaAction from '@shared/api/kinohub/createMediaAction';
import parseEpisodesData from '../../../shared/helpers/parseEpisodeData';
import getMediaActionBySeason from '@shared/api/kinohub/getMediaActionBySeason';

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
    queryFn: () => getMediaActionBySeason(tvShowId, tvSeason),
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
