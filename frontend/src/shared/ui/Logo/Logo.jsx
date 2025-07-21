import { Stack, Typography, useTheme } from '@mui/material';
import LogoIcon from '@shared/icons/LogoIcon';

const Logo = () => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="flex-end"
      paddingBlock={5}
      borderBottom={`1px solid ${theme.palette.transparentGrey}`}
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
