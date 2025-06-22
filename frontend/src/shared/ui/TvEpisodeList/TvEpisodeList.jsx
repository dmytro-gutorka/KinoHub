import getTvShowSeasonDetails from '../../../features/movies/api/getTvShowSeasonDetails';
import getMediaActionBySeason from '../../../features/movies/api/getMediaActionBySeason';
import createMediaAction from '../../../features/movies/api/createMediaAction';
import parseEpisodesData from '../../helpers/parseEpisodeData';
import TvEpisodeItem from '../TvEpisodeItem';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';


const TvEpisodeList = ({ tvSeason }) => {
  const [episodesData, setEpisodesData] = useState(null)
  const { id } = useParams()

  const { data, isSuccess } = useQuery({
    queryKey: ['tvShowSeason', +id, tvSeason],
    queryFn: () => getTvShowSeasonDetails(id, tvSeason),
  });

  useEffect( () => {
    (async () => {
      if (!isSuccess) return
        let epsData = await createMediaAction(id, parseEpisodesData(data.episodes), true)
        setEpisodesData(epsData)
    })()}, [tvSeason, id, isSuccess, data?.episodes]);


  const { data: mediaActionEpisodeList } = useQuery({
    queryKey: ['mediaActionEpisodeList', +id, tvSeason],
    enabled: !!episodesData,
    queryFn: () => getMediaActionBySeason(id, tvSeason),
    select: (episodes) => episodes.map(episode => {
      return {episode: episode.episode, isWatched: episode.isWatched}
    })
  })

  if (!mediaActionEpisodeList) return <div>Loading...</div>

  return (
    <Stack spacing={2}>
      {data?.episodes?.map(episode => {
        const { episode_number: episodeNumber } = episode
        const isWatched =
          !!mediaActionEpisodeList.find(ep => episodeNumber === ep.episode).isWatched
        return (
          <TvEpisodeItem
            isWatched={isWatched}
            mediaActionEpisodeList={mediaActionEpisodeList}
            key={episode.id}
            episodeData={episode} />
        )})}
    </Stack>
  )
};

export default TvEpisodeList;