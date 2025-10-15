import { Button, Stack, Typography } from '@mui/material';
import theme from '@app/theme/theme';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export default function NoFriends() {
  return (
    <Stack
      p={5}
      gap={2}
      direction="column"
      minHeight="600px"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        bgcolor={theme.palette.grey['500']}
        width={100}
        height={100}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </Stack>
      <Typography variant="h5" fontWeight={900}>
        No friends yet
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Start connecting with other movie enthusiasts!
      </Typography>
      <Button startIcon={<PersonAddAltOutlinedIcon />} sx={{ mt: 8 }}>
        Add Friends
      </Button>
    </Stack>
  );
}