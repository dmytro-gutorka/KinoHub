import { Grid, ListItem, Stack, Typography, List } from '@mui/material';
import { useState } from 'react';
import EpisodeList from '../../../entities/tvShowEpisode/ui/episodeList';
import SeasonList from '../../../entities/tvShowSeason/ui/seasonList';
import MediaOverviewBlock from '../MediaOverviewBlock';
import MediaCastAndCrewBlock from '../MediaCastAndCrewBlock';
import MediaDetailsBlock from '../MediaDetailsBlock';
import MediaProductionCompaniesBlock from '../MediaProductionCompaniesBlock';

const MediaOverview = ({ mediaData, mediaType }) => {
  const [tvSeason, setTvSeason] = useState(1);

  const {
    overview,
    seasons,
    credits: { cast },
    production_companies: companies,
  } = mediaData;

  return (
    <Stack mt={14} gap={6}>
      <Grid container justifyContent="space-between">
        <Grid size={7.5}>
          <Stack gap={6}>
            <MediaOverviewBlock overview={overview} />
            <MediaCastAndCrewBlock cast={cast} />
          </Stack>
        </Grid>

        <Grid size={4}>
          <Stack gap={6}>
            <MediaDetailsBlock mediaData={mediaData} />
            <MediaProductionCompaniesBlock companies={companies} />
          </Stack>
        </Grid>
      </Grid>
      {mediaType === 'tv' && (
        <Grid container justifyContent="space-between" mt={6}>
          <Grid size={2.5}>
            <SeasonList seasons={seasons} tvSeason={tvSeason} onSetTvSeason={setTvSeason} />
          </Grid>

          <Grid size={9}>
            <EpisodeList tvSeason={tvSeason} mediaType={mediaType} />
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};

export default MediaOverview;
