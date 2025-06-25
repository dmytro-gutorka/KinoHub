import {SvgIcon} from "@mui/material";

const ChartActivityIcon = ({stroke}) => {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-activity w-5 h-5 text-purple-400">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
        </SvgIcon>
    )
}

export default ChartActivityIcon