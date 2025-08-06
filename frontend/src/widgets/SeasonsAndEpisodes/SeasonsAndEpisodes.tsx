import { SeasonsAndEpisodesProps } from '@features/media/model/types/mediaTypes';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router';
import { EpisodeList, SeasonList } from '@features/tvShow';
import useEpisodeList from '@features/tvShow/model/hooks/useEpisodeList';
import useEpisodeActionList from '@features/tvShow/model/hooks/useEpisodeActionList';

const SeasonsAndEpisodes = ({ seasons }: SeasonsAndEpisodesProps) => {
  const [currentSeasonNumber, setSeasonNumber] = useState(1);

  const params: Readonly<any> = useParams();
  const tvShowId: number = Number(params?.id);

  const { episodeList } = useEpisodeList(tvShowId, currentSeasonNumber);
  const { episodeActionList } = useEpisodeActionList(tvShowId, currentSeasonNumber, episodeList);

  console.log(1111, episodeActionList);
  console.log(episodeList);
  return (
    <Grid container justifyContent="space-between" mt={6}>
      <Grid size={2.5}>
        <SeasonList
          seasonList={seasons}
          currentSeasonNumber={currentSeasonNumber}
          onSeasonNumber={setSeasonNumber}
        />
      </Grid>

      <Grid size={9}>
        <EpisodeList episodeList={episodeList} />
      </Grid>
    </Grid>
  );
};

export default SeasonsAndEpisodes;
