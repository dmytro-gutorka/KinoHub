import {SvgIcon} from "@mui/material";

const MovieOutlineIcon = ({ stroke }) => {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-film w-6 h-6 text-blue-400">
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
    )
}

export default MovieOutlineIcon