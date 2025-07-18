import { Grid } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router';

import useTvShowSeasonDetails from '../../hooks/useTvShowSeasonDetails';
import EpisodeList from '../../../../entities/tvShowEpisode/ui/episodeList';
import SeasonList from '../../../../entities/tvShowSeason/ui/seasonList';

const SeasonsAndEpisodesBlock = ({ seasons }) => {
  const [tvSeason, setTvSeason] = useState(1);

  const { id } = useParams();
  const { episodesData } = useTvShowSeasonDetails(Number(id), tvSeason);

  if (!episodesData?.length) return <div>Loading...</div>;

  return (
    <Grid container justifyContent="space-between" mt={6}>
      <Grid size={2.5}>
        <SeasonList seasons={seasons} tvSeason={tvSeason} onSetTvSeason={setTvSeason} />
      </Grid>

      <Grid size={9}>
        <EpisodeList episodesData={episodesData} />
      </Grid>
    </Grid>
  );
};

export default SeasonsAndEpisodesBlock;
