import { SeasonsAndEpisodesProps } from '@features/media/model/types/mediaTypes';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router';
import { EpisodeList, SeasonList } from '@features/tvShow';
import useTvShowSeasonDetails from '@widgets/SeasonsAndEpisodes/hooks/useTvShowSeasonDetails';

const SeasonsAndEpisodes = ({ seasons }: SeasonsAndEpisodesProps) => {
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

export default SeasonsAndEpisodes;
