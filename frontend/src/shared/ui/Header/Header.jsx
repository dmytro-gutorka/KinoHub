import AppNavLink from '../AppNavLink';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Box, Stack } from '@mui/material';

const Header = () => {
  return (
    <Box component="header">
      <Stack
        component="nav"
        direction="row"
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Stack component="ul" direction="row" spacing={5} sx={{ listStyle: 'none' }}>
          <Box component="li">
            <AppNavLink to="/movies">Movies</AppNavLink>
          </Box>
          <Box component="li">
            <AppNavLink to="/shows">Shows</AppNavLink>
          </Box>
        </Stack>
        <Box>
          <DeleteOutlinedIcon />
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
