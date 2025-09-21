import { TmdbSeasonInfo } from '@entities/types/tmdbEntities';
import { Grid } from '@mui/material';
import { EpisodeList, SeasonList } from '@features/tv-show';
import { useState } from 'react';
import useEpisodeList from '@features/tv-show/model/hooks/useEpisodeList';

export interface SeasonsAndEpisodesProps {
  seasons: TmdbSeasonInfo[];
}

const SeasonsAndEpisodes = ({ seasons }: SeasonsAndEpisodesProps) => {
  const [seasonNumber, setSeasonNumber] = useState(1);
  const { episodes } = useEpisodeList(seasonNumber);

  if (!episodes) return <div>Loading...</div>;

  return (
    <Grid container justifyContent="space-between" mt={6}>
      <Grid size={2.5}>
        <SeasonList
          seasons={seasons}
          seasonNumber={seasonNumber}
          onSeasonNumber={setSeasonNumber}
        />
      </Grid>

      <Grid size={9}>
        <EpisodeList episodes={episodes} />
      </Grid>
    </Grid>
  );
};

export default SeasonsAndEpisodes;
