import RouterLink from '../RouterLink';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { AppBar, Box, Stack } from '@mui/material';

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
            <RouterLink to="/movies">Movies</RouterLink>
          </Box>
          <Box component="li">
            <RouterLink to="/shows">Shows</RouterLink>
          </Box>
          <Box component="li">
            <RouterLink to="/anime">Anime</RouterLink>
          </Box>
        </Stack>
        <Box>
          <DeleteOutlinedIcon />
          <DeleteOutlinedIcon />
          <DeleteOutlinedIcon />
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
