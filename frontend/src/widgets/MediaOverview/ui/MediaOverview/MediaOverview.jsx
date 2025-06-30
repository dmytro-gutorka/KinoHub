import { Grid, Stack } from '@mui/material';

import MediaProductionCompaniesBlock from '../MediaProductionCompaniesBlock';
import SeasonsAndEpisodesBlock from '../SeasonsAndEpisodesBlock';
import MediaCastAndCrewBlock from '../MediaCastAndCrewBlock';
import MediaDetailsBlock from '../MediaDetailsBlock';
import MediaRatingBlock from '../MediaRatingBlock';
import MediaPlotBlock from '../MediaPlotBlock';

const MediaOverview = ({ mediaDataWithActions, mediaType }) => {
  const {
    overview,
    seasons,
    credits: { cast },
    production_companies: companies,
  } = mediaDataWithActions;

  return (
    <Stack mt={14} gap={6}>
      <Grid container justifyContent="space-between">
        <Grid size={7.5}>
          <Stack gap={6}>
            <MediaPlotBlock overview={overview} />
            <MediaCastAndCrewBlock cast={cast} />
          </Stack>
        </Grid>

        <Grid size={4}>
          <Stack gap={6}>
            <MediaDetailsBlock mediaDataWithActions={mediaDataWithActions} />
            <MediaProductionCompaniesBlock companies={companies} />
            <MediaRatingBlock mediaDataWithActions={mediaDataWithActions} />
          </Stack>
        </Grid>
      </Grid>

      {mediaType === 'tv' && <SeasonsAndEpisodesBlock seasons={seasons} />}
    </Stack>
  );
};

export default MediaOverview;
