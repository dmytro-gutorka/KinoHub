import { MediaOverviewProps } from '@features/media/model/types/mediaTypes';
import { MediaType } from '@shared/types/generalTypes';
import { Stack } from '@mui/material';

import SeasonsAndEpisodes from '@widgets/SeasonsAndEpisodes';
import MediaCastAndCrew from '@features/media/ui/MediaCastAndCrew';
import MediaRating from '@features/media/ui/MediaRating';
import MediaPlot from '@features/media/ui/MediaPlot';
import MediaProdCompanies from '@features/media/ui/MediaProdCompanies';
import MediaDetails from '@features/media/ui/MediaDetails';
import MediaComments from '@widgets/MediaComments';
import { useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

export default function MediaOverview<T extends MediaType>({
  tmdbMediaData,
  mediaAction,
  mediaType,
  mediaId,
}: MediaOverviewProps<T>) {
  const { overview, credits, production_companies: companies } = tmdbMediaData;

  const [value, setValue] = useState('1');

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
        {'seasons' in tmdbMediaData && (
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
            <MediaDetails tmdbMediaData={tmdbMediaData} mediaType={mediaType} />
            <MediaProdCompanies companies={companies} />
          </Stack>
          <MediaRating mediaAction={mediaAction} mediaType={mediaType} />
        </Stack>
      </TabPanel>

      <TabPanel value="2">
        {'credits' in tmdbMediaData && credits && <MediaCastAndCrew cast={credits.cast} />}
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
