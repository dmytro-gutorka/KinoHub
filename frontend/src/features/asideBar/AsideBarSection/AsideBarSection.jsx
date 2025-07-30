import { Box, Stack, Typography } from '@mui/material';

import AsideBarLink from '@features/asideBar/AsideBarLink';

const AsideBarSection = ({ tabs, title }) => {
  const tabsEntries = Object.entries(tabs);

  return (
    <Box>
      <Typography variant="subtitle2" component="h2" fontWeight="900" letterSpacing={1.5} mb={2}>
        {title}
      </Typography>

      <Stack component="ul" pl={2} gap={0.5}>
        {tabsEntries.map(([title, value]) => (
          <AsideBarLink key={title} to={value.path} hasIcon>
            {value.icon} {title}
          </AsideBarLink>
        ))}
      </Stack>
    </Box>
  );
};

export default AsideBarSection;
