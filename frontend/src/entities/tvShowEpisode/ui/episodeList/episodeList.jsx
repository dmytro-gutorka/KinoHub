import getTvShowSeasonDetails from '../../../../shared/api/getTvShowSeasonDetails';
import getMediaActionBySeason from '../../../../shared/api/getMediaActionBySeason';
import createMediaAction from '../../../../shared/api/createMediaAction';
import parseEpisodesData from '../../../../shared/helpers/parseEpisodeData';
import EpisodeItem from '../episodeItem';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';

const EpisodeList = ({ tvSeason }) => {
  const [episodesData, setEpisodesData] = useState(null);
  const { id } = useParams();

  const { data, isSuccess } = useQuery({
    queryKey: ['tvShowSeason', +id, tvSeason],
    queryFn: () => getTvShowSeasonDetails(id, tvSeason),
  });

  useEffect(() => {
    (async () => {
      if (!isSuccess) return;
      let epsData = await createMediaAction(id, parseEpisodesData(data.episodes), true);
      setEpisodesData(epsData);
    })();
  }, [tvSeason, id, isSuccess, data?.episodes]);

  const { data: mediaActionEpisodeList } = useQuery({
    queryKey: ['mediaActionEpisodeList', +id, tvSeason],
    enabled: !!episodesData,
    queryFn: () => getMediaActionBySeason(id, tvSeason),
    select: (episodes) =>
      episodes.map((episode) => {
        return { episode: episode.episode, isWatched: episode.isWatched };
      }),
  });

  if (!mediaActionEpisodeList) return <div>Loading...</div>;

  return (
    <Stack spacing={2}>
      {data?.episodes?.slice(0, 40).map((episode) => {
        //Replace slice with some kind of lazy loading/pagination for seasons that have 40-50+ episode
        const { episode_number: episodeNumber } = episode;
        const isWatched = !!mediaActionEpisodeList.find((ep) => episodeNumber === ep.episode)?.isWatched;
        return (
          <EpisodeItem
            mediaActionEpisodeList={mediaActionEpisodeList}
            episodeData={episode}
            isWatched={isWatched}
            key={episode.id}
          />
        );
      })}
    </Stack>
  );
};

export default EpisodeList;
