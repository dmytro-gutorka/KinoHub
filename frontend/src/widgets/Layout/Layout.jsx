import AsideBar from '../AsideBar';

import { Outlet } from 'react-router';
import { Box, Divider, Stack } from '@mui/material';

const Layout = () => {
  return (
   <Stack component="main" direction='row' divider={<Divider orientation="vertical" />}
          sx={{ background: 'linear-gradient(to bottom right, #000000, #0f172a, #000000)' }}>
     <Box p={4} component="aside">
       <AsideBar/>
     </Box>
     <Box p={6}>
       <Outlet/>
     </Box>
   </Stack>
  );
};

export default Layout;
