import { Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

import AsideBar from '../AsideBar';
import Header from '@widgets/Header';

const Layout = () => {
  const theme = useTheme();

  return (
    <Stack component="main" direction="row" minHeight="100vh">
      <Stack
        component="aside"
        minHeight="100vh"
        borderRight={`1px solid ${theme.palette.transparentGrey}`}
      >
        <AsideBar />
      </Stack>
      <Stack minHeight="100vh" flex="1">
        <Header />
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Layout;
