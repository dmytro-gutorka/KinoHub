import { Box, Stack, Typography } from '@mui/material';
import AppNavLink from '../AppNavLink';

const SidebarSection = ({tabs, title}) => {

  const tabsEntries = Object.entries(tabs)

  return (
    <Box>
      <Typography variant="subtitle1" component="h2">
        {title}
      </Typography>

      <Stack component="ul">
        {tabsEntries.map(([title ,value]) =>
          <AppNavLink key={title} to={title} hasIcon>{value} {title}</AppNavLink>
        )}
      </Stack>
    </Box>
  )
};

export default SidebarSection;