import { Grid, Stack } from '@mui/material';

import SeasonsAndEpisodes from '@widgets/SeasonsAndEpisodes';
import MediaCastAndCrew from '@features/media/ui/MediaCastAndCrew';
import MediaRating from '@features/media/ui/MediaRating';
import MediaPlot from '@features/media/ui/MediaPlot';
import MediaProdCompanies from '@features/media/ui/MediaProdCompanies';
import MediaDetails from '@features/media/ui/MediaDetails';
import { MediaType } from '@shared/types/generalTypes';
import { MediaOverviewProps } from '@features/media/model/mediaTypes';

export default function MediaOverview<T extends MediaType>({
  tmdbMediaData,
  mediaAction,
  mediaType,
}: MediaOverviewProps<T>) {
  const { overview, credits, production_companies: companies } = tmdbMediaData;

  // make all Media... component compound with COntex API

  return (
    <Stack mt={14} gap={6}>
      <Grid container justifyContent="space-between">
        <Grid size={7.5}>
          <Stack gap={6}>
            <MediaPlot overview={overview} />
            {'credits' in tmdbMediaData && credits && <MediaCastAndCrew cast={credits.cast} />}
          </Stack>
        </Grid>

        <Grid size={4}>
          <Stack gap={6}>
            <MediaDetails tmdbMediaData={tmdbMediaData} mediaType={mediaType} />
            <MediaProdCompanies companies={companies} />
            <MediaRating mediaAction={mediaAction} mediaType={mediaType} />
          </Stack>
        </Grid>
      </Grid>
      {'seasons' in tmdbMediaData && <SeasonsAndEpisodes seasons={tmdbMediaData.seasons} />}
    </Stack>
  );
}
