import { Stack, Typography, useTheme } from '@mui/material';

export default function NoOutcomingRequests() {
  const theme = useTheme();

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
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </Stack>
      <Typography variant="h5" fontWeight={900}>
        No pending requests
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Friend requests you send will appear here
      </Typography>
    </Stack>
  );
}
