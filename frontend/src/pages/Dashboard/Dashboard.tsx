import { Container } from '@mui/material';
import { useState } from 'react';
import DashboardOverviewTab from '@features/dashboard/ui/DashboardOverviewTab';
import DashboardTvShowsTab from '@features/dashboard/ui/DashboardTvShowsTab';
import DashboardMoviesTab from '@features/dashboard/ui/DashboardMoviesTab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

export default function Dashboard() {
  const [value, setValue] = useState('1');

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
          <DashboardOverviewTab />
        </TabPanel>
        <TabPanel value="2">
          <DashboardMoviesTab />
        </TabPanel>
        <TabPanel value="3">
          <DashboardTvShowsTab />
        </TabPanel>
      </TabContext>
    </Container>
  );
}
