import { Grid, Stack } from '@mui/material';
import { useState } from 'react';

import EpisodeList from '../../../entities/tvShowEpisode/ui/episodeList';
import SeasonList from '../../../entities/tvShowSeason/ui/seasonList';
import MediaRatingBlock from '../MediaRatingBlock';
import MediaDetailsBlock from '../MediaDetailsBlock';
import MediaOverviewBlock from '../MediaOverviewBlock';
import MediaCastAndCrewBlock from '../MediaCastAndCrewBlock';
import MediaProductionCompaniesBlock from '../MediaProductionCompaniesBlock';
import useMediaAction from '../../../features/movies/hooks/useMediaAction';

const MediaOverview = ({ mediaData, mediaType }) => {
  const [tvSeason, setTvSeason] = useState(1);

  const {
    id,
    name,
    title,
    poster_path: posterPath,
    first_air_date: airDate,
    vote_average: voteAverage,
    release_date: releaseDate,
    overview,
    seasons,
    credits: { cast },
    production_companies: companies,
  } = mediaData;

  const actionMutation = useMediaAction('mediaActionData', id);

  const relevantReleaseDate = airDate || releaseDate || '0000-00-00';
  const relevantTitle = name || title;

  const extraMediaData = {
    releaseDate: relevantReleaseDate,
    title: relevantTitle,
    posterPath,
    voteAverage,
  };

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
            <MediaRatingBlock mediaId={id} actionMutation={actionMutation} extraMediaData={extraMediaData} />
            Что то с Add to favorites и add to movieboard когда оно включена
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
