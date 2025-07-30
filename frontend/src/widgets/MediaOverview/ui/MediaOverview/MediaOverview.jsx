import { Grid, Stack } from '@mui/material';

import MediaProductionCompaniesBlock from '@features/media/MediaProductionCompaniesBlock';
import SeasonsAndEpisodesBlock from '@features/media/SeasonsAndEpisodesBlock';
import MediaCastAndCrewBlock from '@features/media/MediaCastAndCrewBlock';
import MediaDetailsBlock from '@features/media/MediaDetailsBlock';
import MediaRatingBlock from '@features/media/MediaRatingBlock';
import MediaPlotBlock from '@features/media/MediaPlotBlock';

const MediaOverview = ({ tmdbMediaData, mediaAction, mediaType }) => {
  const {
    overview,
    seasons,
    credits: { cast },
    production_companies: companies,
  } = tmdbMediaData;

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
            <MediaDetailsBlock tmdbMediaData={tmdbMediaData} />
            <MediaProductionCompaniesBlock companies={companies} />
            <MediaRatingBlock mediaAction={mediaAction} mediaType={mediaType} />
          </Stack>
        </Grid>
      </Grid>

      {mediaType === 'tv' && <SeasonsAndEpisodesBlock seasons={seasons} />}
    </Stack>
  );
};

export default MediaOverview;
