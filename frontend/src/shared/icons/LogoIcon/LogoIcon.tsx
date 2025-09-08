import { Stack, SvgIcon, useTheme } from '@mui/material';

function LogoIcon() {
  const theme = useTheme();

  return (
    <Stack
      width="45px"
      height="45px"
      alignItems="center"
      justifyContent="center"
      borderRadius={2}
      sx={{ background: theme.palette.gradientGrey }}
    >
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-film w-6 h-6 text-white"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 3v18"></path>
          <path d="M3 7.5h4"></path>
          <path d="M3 12h18"></path>
          <path d="M3 16.5h4"></path>
          <path d="M17 3v18"></path>
          <path d="M17 7.5h4"></path>
          <path d="M17 16.5h4"></path>
        </svg>
      </SvgIcon>
    </Stack>
  );
}

export default LogoIcon;
