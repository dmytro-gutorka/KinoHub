import getTvShowSeasonDetails from '../../../features/movies/api/getTvShowSeasonDetails';
import TvEpisodeItem from '../TvEpisodeItem';
import createMediaAction from '../../../features/movies/api/createMediaAction';
import parseEpisodesData from '../../helpers/parseEpisodeData';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';


const TvEpisodeList = ({ tvSeason, mediaType }) => {
  const [episodesData, setEpisodesData] = useState(null)

  const { id } = useParams()

  const { data, isSuccess } = useQuery({
    queryKey: ['tvShowSeason', +id, tvSeason],
    queryFn: () => getTvShowSeasonDetails(id, tvSeason),
    staleTime: Infinity,
  });

  useEffect( () => {
    (
      async () => {
        if (!isSuccess) return

        let episodesData = await createMediaAction(id, parseEpisodesData(data.episodes), true)
        setEpisodesData(episodesData)
      }
    )()
  }, [tvSeason, id, isSuccess, data?.episodes]);

  if (!episodesData) return <div>Loading...</div>

  return (
    <Stack spacing={2}>
          {data?.episodes?.map(episode => {
            const actionEpisodeData = episodesData.find(eps => eps.episode === episode.episode_number)

            return <TvEpisodeItem
              mediaActionEpisodeData={actionEpisodeData}
              key={episode.id}
              episodeData={episode}
            />
            }

          )}
    </Stack>
  )


};

export default TvEpisodeList;