import { Grid } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router';

import useTvShowSeasonDetails from '@widgets/MediaOverview/hooks/useTvShowSeasonDetails';
import EpisodeList from '@features/tvShowEpisode/ui/EpisodeList';
import SeasonList from '@features/tvShowSeason/ui/SeasonList';

const SeasonsAndEpisodesBlock = ({ seasons }) => {
  const [tvSeason, setTvSeason] = useState(1);

  const params: Readonly<any> = useParams();
  const mediaId: string = params?.id;

  const { episodesData } = useTvShowSeasonDetails(mediaId, tvSeason);

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
