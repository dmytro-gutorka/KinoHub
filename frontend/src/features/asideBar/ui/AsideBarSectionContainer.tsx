import { Box, Stack, Typography } from '@mui/material';
import { AsideBarSectionProps } from '@features/asideBar/model/asideBarTypes';

const AsideBarSectionContainer = ({ children, title }: AsideBarSectionProps) => {
  return (
    <Box>
      <Typography variant="subtitle2" component="h2" fontWeight="900" letterSpacing={1.5} mb={2}>
        {title}
      </Typography>

      <Stack component="ul" pl={2} gap={0.5}>
        {children}
      </Stack>
    </Box>
  );
};

export default AsideBarSectionContainer;
