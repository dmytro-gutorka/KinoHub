import { Box, Stack, Typography } from '@mui/material';
import AppNavLink from '../AppNavLink';

const SidebarSection = ({tabs, title}) => {

  const tabsEntries = Object.entries(tabs)

  return (
    <Box>
      <Typography variant="subtitle2" component="h2" fontWeight="900" letterSpacing={1.5} mb={2}>
        {title}
      </Typography>

      <Stack component="ul" pl={2} gap={0.5}>
        {tabsEntries.map(([title ,value]) =>
          <AppNavLink key={title} to={value.path} hasIcon>
              {value.icon} {title}
          </AppNavLink>
        )}
      </Stack>
    </Box>
  )
};

export default SidebarSection;