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
import DashboardTvShowsTab from '@features/dashboard/ui/DashboardTvShowsTab';
import DashboardOverviewTab from '@features/dashboard/ui/DashboardOverviewTab';
import DashboardMoviesTab from '@features/dashboard/ui/DashboardMoviesTab';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import PageWrapper from '@shared/ui/PageWrapper';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';

export default function Dashboard() {
  const [value, setValue] = useState('1');

  const userMeta: IUser | null = useSelector(selectUserMetaData);
  const { data: userMediaStats, isSuccess } = useUserMediaStats(userMeta?.id);

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <Container maxWidth="lg">
      <PageWrapper>
        <TabContext value={value}>
          <Box ml={5} mb={6}>
            <TabList onChange={(_, v: string) => setValue(v)}>
              <Tab icon={<PhoneIcon />} iconPosition="start" label="Overview" value="1" />
              <Tab icon={<FavoriteIcon />} iconPosition="start" label="Movies" value="2" />
              <Tab icon={<PersonPinIcon />} iconPosition="start" label="TV Shows" value="3" />
            </TabList>
          </Box>
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
      </PageWrapper>
    </Container>
  );
};
