import { TmdbMovieDetails, TmdbTvShowDetails } from '@entities/types/tmdbEntities';
import { MediaOverviewProps } from '@features/media/model/types/mediaTypes';
import { MediaType } from '@shared/types/generalTypes';
import { Stack } from '@mui/material';
import { useState } from 'react';
import MoviePrimaryDetails from '@features/media/ui/MediaPrimaryDetails';
import MediaProdCompanies from '@features/media/ui/MediaProdCompanies';
import SeasonsAndEpisodes from '@widgets/SeasonsAndEpisodes';
import TvShowMainDetails from '@features/tv-show/ui/TvShowPrimaryDetails';
import MediaCastAndCrew from '@features/media/ui/MediaCastAndCrew';
import MediaComments from '@widgets/MediaComments';
import MediaRating from '@features/media/ui/MediaRating';
import TabContext from '@mui/lab/TabContext';
import MediaPlot from '@features/media/ui/MediaPlot';
import TabPanel from '@mui/lab/TabPanel';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

export default function MediaOverview<T extends MediaType>({
  tmdbMediaData,
  mediaAction,
  mediaType,
  mediaId,
}: MediaOverviewProps<T>) {
  const [value, setValue] = useState('1');
  const { overview, credits, production_companies: companies } = tmdbMediaData;

  const hasSeasons: boolean = 'seasons' in tmdbMediaData;

  // TODO:1 make all Media... component compound with Context API

  return (
    <TabContext value={value}>
      <TabList sx={{ marginTop: 10, marginBottom: 10 }} onChange={(_, v: string) => setValue(v)}>
        <Tab
          icon={<InsertChartOutlinedOutlinedIcon />}
          iconPosition="start"
          label="Overview"
          value="1"
        />
        <Tab icon={<MovieOutlinedIcon />} iconPosition="start" label="Cast & Crew" value="2" />
        <Tab icon={<LiveTvOutlinedIcon />} iconPosition="start" label="Reviews" value="3" />
        {hasSeasons && (
          <Tab
            icon={<LiveTvOutlinedIcon />}
            iconPosition="start"
            label="Seasons & Episodes"
            value="4"
          />
        )}
      </TabList>

      <TabPanel value="1">
        <Stack gap={5}>
          <MediaPlot overview={overview} />
          <Stack direction="row" gap={5}>
            {mediaType === 'tv' && (
              <TvShowMainDetails tmdbMediaData={tmdbMediaData as TmdbTvShowDetails} />
            )}

            {mediaType === 'movie' && (
              <MoviePrimaryDetails tmdbMediaData={tmdbMediaData as TmdbMovieDetails} />
            )}
            <MediaProdCompanies companies={companies} />
          </Stack>
          <MediaRating mediaAction={mediaAction} mediaType={mediaType} />
        </Stack>
      </TabPanel>

      <TabPanel value="2">
        <MediaCastAndCrew cast={credits.cast} />
      </TabPanel>

      <TabPanel value="3">
        <MediaComments mediaType={mediaType} mediaId={mediaId}></MediaComments>
      </TabPanel>

      <TabPanel value="4">
        {'seasons' in tmdbMediaData && <SeasonsAndEpisodes seasons={tmdbMediaData.seasons} />}
      </TabPanel>
    </TabContext>
  );
}
