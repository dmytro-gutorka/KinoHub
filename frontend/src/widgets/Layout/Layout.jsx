import AsideBar from '../AsideBar';

import { Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

const Layout = () => {

    const theme = useTheme()

    return (
        <Stack component="main" direction='row' minHeight='100vh'>
            <Stack component="aside" minHeight="100vh" borderRight={`1px solid ${theme.palette.transparentGrey}`}>
                <AsideBar/>
            </Stack>
            <Stack minHeight='100vh' flex="1">
                <Outlet/>
            </Stack>
        </Stack>
      );
};

export default Layout;
