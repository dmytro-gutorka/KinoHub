import Header from '../Header';
import AsideBar from '../AsideBar';

import { Outlet } from 'react-router';
import { Box, Container, Grid, Paper, Stack } from '@mui/material';

const Layout = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Grid container spacing={2}>
        <Grid
          size={3}
          justifySelf="center"
          alignSelf="center"
          border="1px solid #2e2e2e"
          borderRadius={1}
        >
          <AsideBar />
        </Grid>
        <Grid
          size={9}
          sx={{ p: '2rem' }}
          component="main"
          border="1px solid #2e2e2e"
          borderRadius={1}
        >
          <Outlet />
        </Grid>
      </Grid>
      {/*<Stack>*/}
      {/*  <Header />*/}
      {/*  <Box display="flex">*/}
      {/*    <AsideBar />*/}
      {/*    <Outlet />*/}
      {/*  </Box>*/}
      {/*</Stack>*/}
    </Container>
  );
};

export default Layout;
