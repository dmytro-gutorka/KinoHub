import { Stack, Typography } from '@mui/material';
import LogoIcon from '@shared/icons/LogoIcon';

const Logo = () => {

  return (
    <Stack
      direction="row"
      alignItems="flex-end"
      paddingTop={5}
      gap={2}
    >
      <LogoIcon />
      <Typography variant="h3" fontSize={20} fontWeight="900" letterSpacing={0.1} mb={2}>
        KinoHub
      </Typography>
    </Stack>
  );
};

export default Logo;
