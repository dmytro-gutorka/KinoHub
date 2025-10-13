import { Container, Stack } from '@mui/material';
import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import Search from '@shared/ui/Search';
import BlockWrapper from '@shared/ui/BlockWrapper';

export default function Friends() {
  const [value, setValue] = useState('1');
  const [search, setSearch] = useState('');

  return (
    <Container maxWidth="lg">
      <TabContext value={value}>
        <Stack gap={4} p={5}>
          <Search />
          <TabList onChange={(_, v: string) => setValue(v)}>
            <Tab icon={<Diversity1OutlinedIcon />} iconPosition="start" label="Friends" value="1" />
            <Tab
              icon={<GetAppOutlinedIcon />}
              iconPosition="start"
              label="Incoming Requests"
              value="2"
            />
            <Tab
              icon={<UploadOutlinedIcon />}
              iconPosition="start"
              label="Outcoming Requests"
              value="3"
            />
          </TabList>
        </Stack>

        <TabPanel value="1">1</TabPanel>

        <TabPanel value="2">2</TabPanel>

        <TabPanel value="3">3</TabPanel>
      </TabContext>
    </Container>
  );
}
