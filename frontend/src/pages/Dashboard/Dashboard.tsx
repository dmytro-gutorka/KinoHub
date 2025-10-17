import { Container } from '@mui/material';
import { useState } from 'react';
import DashboardTvShowsTab from '@features/dashboard/ui/DashboardTvShowsTab';
import DashboardOverviewTab from '@features/dashboard/ui/DashboardOverviewTab';
import DashboardMoviesTab from '@features/dashboard/ui/DashboardMoviesTab';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

export default function Dashboard() {
  const [value, setValue] = useState('1');

  const { data: userMediaStats, isSuccess } = useUserMediaStats('year');

  if (!isSuccess) return null;

  console.log(userMediaStats);

  return (
    <Container maxWidth="lg">
      <TabContext value={value}>
        <TabList onChange={(_, v: string) => setValue(v)}>
          <Tab
            icon={<InsertChartOutlinedOutlinedIcon />}
            iconPosition="start"
            label="Overview"
            value="1"
          />
          <Tab icon={<MovieOutlinedIcon />} iconPosition="start" label="Movies" value="2" />
          <Tab icon={<LiveTvOutlinedIcon />} iconPosition="start" label="TV Shows" value="3" />
        </TabList>

        <TabPanel value="1">
          <DashboardOverviewTab userMediaStats={userMediaStats} />
        </TabPanel>
        <TabPanel value="2">
          <DashboardMoviesTab userMediaStats={userMediaStats} />
        </TabPanel>
        <TabPanel value="3">
          <DashboardTvShowsTab userMediaStats={userMediaStats} />
        </TabPanel>
      </TabContext>
    </Container>
  );
}
