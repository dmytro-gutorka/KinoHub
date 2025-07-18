import {SvgIcon} from "@mui/material";

const ChartUpLineIcon = ({stroke}) => {

    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-trending-up w-5 h-5 text-blue-400">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
        </SvgIcon>
    )
}

export default ChartUpLineIcon