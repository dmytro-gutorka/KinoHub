import {Stack, Typography, useTheme} from "@mui/material";

const Logo = () => {

    const theme = useTheme()

    return (
        <Stack
            direction='row'
            alignItems="flex-end"
            paddingBlock={5}
            borderBottom={`1px solid ${theme.palette.transparentGrey}`}
            gap={2}
        >
            <Stack
                width="45px"
                height="45px"
                alignItems="center"
                justifyContent="center"
                borderRadius={1}
                sx={{background: theme.palette.gradientGrey}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-film w-6 h-6 text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M7 3v18"></path>
                    <path d="M3 7.5h4"></path>
                    <path d="M3 12h18"></path>
                    <path d="M3 16.5h4"></path>
                    <path d="M17 3v18"></path>
                    <path d="M17 7.5h4"></path>
                    <path d="M17 16.5h4"></path>
                </svg>
            </Stack>
            <Typography variant="h3" fontSize={20} fontWeight="900" letterSpacing={0.1} mb={2}>KinoHub</Typography>
        </Stack>

    )
}

export default Logo