import { SeasonsAndEpisodesProps } from '@features/media/model/types/mediaTypes';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router';
import { EpisodeList, SeasonList } from '@features/tv-show';
import useEpisodeList from '@features/tv-show/model/hooks/useEpisodeList';
import useGetOrCreateEpisodeActionList from '@features/tv-show/model/hooks/useGetOrCreateEpisodeActionList';

const SeasonsAndEpisodes = ({ seasons }: SeasonsAndEpisodesProps) => {
  const [currentSeasonNumber, setSeasonNumber] = useState(1);

  const params: Readonly<any> = useParams();
  const tvShowId: number = Number(params?.id);

  const { episodeList } = useEpisodeList(tvShowId, currentSeasonNumber);
  const { episodeActionList } = useGetOrCreateEpisodeActionList(
    tvShowId,
    currentSeasonNumber,
    episodeList
  );

  if (!episodeList || !episodeActionList) return <div>Loading...</div>;

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
        <EpisodeList episodeList={episodeList} episodeActionList={episodeActionList} />
      </Grid>
    </Grid>
  );
};

export default SeasonsAndEpisodes;
