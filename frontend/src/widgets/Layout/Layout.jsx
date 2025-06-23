import AsideBar from '../AsideBar';

import { Outlet } from 'react-router';
import {Box, Stack, useTheme} from '@mui/material';

const Layout = () => {

    const theme = useTheme()

      return (
       <Stack component="main" direction='row'
              sx={{background: theme.palette.gradientMidnightSpace}}>
         <Box p={4} component="aside" borderRight={`1px solid ${theme.palette.transparentGrey}`}>
           <AsideBar/>
         </Box>
         <Box p={6}>
           <Outlet/>
         </Box>
       </Stack>
      );
};

export default Layout;
