import { Grid, Stack } from '@mui/material';

import SeasonsAndEpisodesBlock from '@features/media/ui/SeasonsAndEpisodes';
import MediaCastAndCrew from '@features/media/ui/MediaCastAndCrew';
import MediaRating from '@features/media/ui/MediaRating';
import MediaPlot from '@features/media/ui/MediaPlot';
import MediaProdCompanies from '@features/media/ui/MediaProdCompanies';
import MediaDetails from '@features/media/ui/MediaDetails';

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
            <MediaPlot overview={overview} />
            <MediaCastAndCrew cast={cast} />
          </Stack>
        </Grid>

        <Grid size={4}>
          <Stack gap={6}>
            <MediaDetails tmdbMediaData={tmdbMediaData} />
            <MediaProdCompanies companies={companies} />
            <MediaRating mediaAction={mediaAction} mediaType={mediaType} />
          </Stack>
        </Grid>
      </Grid>

      {mediaType === 'tv' && <SeasonsAndEpisodesBlock seasons={seasons} />}
    </Stack>
  );
};

export default MediaOverview;
