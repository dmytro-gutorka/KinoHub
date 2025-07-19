import { Box, Icon, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const SignInForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack width="450px">
      <Stack>
        <Box>
          <Box>
            <Icon></Icon>
            <Typography>Welcome back</Typography>
          </Box>
          <IconButton>X</IconButton>
        </Box>
        <Typography>Sign in</Typography>
      </Stack>
      <Stack>
        <div>Warning</div>
        <form></form>
      </Stack>
    </Stack>
  );
};

export default SignInForm;
