import Header from '../Header';
import AsideBar from '../AsideBar';

import { Outlet } from 'react-router';
import { Grid } from '@mui/material';

const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <AsideBar />
      </Grid>
      <Grid size={9}>
        <Header />
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
