import getTvShowSeasonDetails from '../../../features/movies/api/getTvShowSeasonDetails';
import TvEpisodeItem from '../TvEpisodeItem';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import createMediaAction from '../../../features/movies/api/createMediaAction';
import parseEpisodesData from '../../helpers/parseEpisodeData';

const TvEpisodeList = ({tvSeason}) => {
  const { id } = useParams()

  const { data, isSuccess } = useQuery({
    queryKey: ['tvShowSeason', +id, tvSeason],
    queryFn: () => getTvShowSeasonDetails(id, tvSeason),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isSuccess)
      createMediaAction(id, parseEpisodesData(data.episodes), true)
  }, );

  return (
    <Stack spacing={2}>
          {data?.episodes?.map(episode => <TvEpisodeItem key={episode.id} episodeData={episode}/>)}
    </Stack>
  )


};

export default TvEpisodeList;