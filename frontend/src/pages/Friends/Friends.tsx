import { Container, Pagination, Stack } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Search from '@shared/ui/Search';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import FriendsTab from '@features/friends/ui/FriendsTab';
import useDebouncedValue from '@shared/hooks/useDebouncedValue';
import IncomingFriendRequestsTab from '@features/friends/ui/IncomingFriendRequestsTab';
import OutcomingFriendRequestsTab from '@features/friends/ui/OutcomingFriendRequestsTab';

export default function Friends() {
  const [value, setValue] = useState('1');
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const debouncedSearched = useDebouncedValue<string>(search, 500);

  function handleTabChange(_: SyntheticEvent, v: string) {
    setValue(v);
    setSearch('');
    setPage(1);
  }

  return (
    <Container maxWidth="lg">
      <TabContext value={value}>
        <Stack gap={4} p={5}>
          <Search onChange={setSearch} search={search} />
          <TabList onChange={handleTabChange}>
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

        <TabPanel value="1">
          <FriendsTab
            search={debouncedSearched}
            page={page}
            setPage={setPage}
            setTotalPages={setTotalPages}
          />
        </TabPanel>

        <TabPanel value="2">
          <IncomingFriendRequestsTab
            search={debouncedSearched}
            page={page}
            setPage={setPage}
            setTotalPages={setTotalPages}
          />
        </TabPanel>

        <TabPanel value="3">
          <OutcomingFriendRequestsTab
            search={debouncedSearched}
            page={page}
            setPage={setPage}
            setTotalPages={setTotalPages}
          />
        </TabPanel>

        {totalPages > 1 && (
          <Pagination
            onChange={(_, e) => setPage(e)}
            count={totalPages}
            sx={{ marginBlock: 15, placeSelf: 'center' }}
          />
        )}
      </TabContext>
    </Container>
  );
}
