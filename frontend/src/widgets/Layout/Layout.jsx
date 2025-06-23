import AsideBar from '../AsideBar';

import { Box, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

const Layout = () => {

    const theme = useTheme()

    return (
        <Stack component="main" direction='row' sx={{background: theme.palette.gradientMidnightSpace}}>
            <Box component="aside" borderRight={`1px solid ${theme.palette.transparentGrey}`}>
                <AsideBar/>
            </Box>
            <Box>
                <Outlet/>
            </Box>
        </Stack>
      );
};

export default Layout;
