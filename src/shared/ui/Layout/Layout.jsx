import Header from '../Header';
import AsideBar from '../AsideBar';

import { Outlet } from 'react-router';
import { Container, Grid } from '@mui/material';

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid size={3}>
          <AsideBar />
        </Grid>
        <Grid size={9} sx={{ p: '2rem' }}>
          <Header />
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
