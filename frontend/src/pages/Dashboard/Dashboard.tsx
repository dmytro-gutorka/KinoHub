import { useSelector } from 'react-redux';
import { selectUserMetaData } from '@features/auth/model/selectors';
import { IUser } from '@features/auth/model/authTypes';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PageWrapper from '@shared/ui/PageWrapper';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import DashboardOverviewTab from '@features/dashboard/ui/DashboardOverviewTab';
import TabContext from '@mui/lab/TabContext';
import DashboardMoviesTab from '@features/dashboard/ui/DashboardMoviesTab';
import TabPanel from '@mui/lab/TabPanel';
import DashboardTvShowsTab from '@features/dashboard/ui/DashboardTvShowsTab';
import * as React from 'react';

const Dashboard = () => {
  const [value, setValue] = React.useState('1');

  const userMeta: IUser | null = useSelector(selectUserMetaData);
  const { data, isSuccess } = useUserMediaStats(userMeta?.id);

  const handleChange = (event, newValue) => setValue(newValue);

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <Container maxWidth="lg">
      <PageWrapper>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', pl: '16px' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab icon={<PhoneIcon />} iconPosition="start" label="Overview" value="1" />
              <Tab icon={<FavoriteIcon />} iconPosition="start" label="Movies" value="2" />
              <Tab icon={<PersonPinIcon />} iconPosition="start" label="TV Shows" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DashboardOverviewTab userMediaStats={data} />
          </TabPanel>
          <TabPanel value="2">
            <DashboardMoviesTab userMediaStats={data} />
          </TabPanel>
          <TabPanel value="3">
            <DashboardTvShowsTab userMediaStats={data} />
          </TabPanel>
        </TabContext>
      </PageWrapper>
    </Container>
  );
};

export default Dashboard;
