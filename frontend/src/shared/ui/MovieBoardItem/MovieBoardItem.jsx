import {Box, Card, CardContent, CardMedia, Stack, Typography, useTheme} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import getPosterURL from "../../helpers/getPosterURL";
import LabelWithIcon from "../LabelWithIcon";
import {useDraggable} from "@dnd-kit/core";

const MovieBoardItem = ({id, posterPath, title}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id,
    });

    const imgURL = getPosterURL(posterPath)
    const theme = useTheme()

    return (
        <Card
            {...listeners}
            {...attributes}
            ref={setNodeRef}
            sx={{
                minWidth: "270px",
                transform: transform
                    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
                    : 'none',
                cursor: 'grab',
                userSelect: 'none',
                display: 'flex',
                padding: theme.spacing(2.5),
                background: 'transparent',
                border: theme.customComponents.border
        }}>
            <CardMedia
                component="img"
                image={imgURL}
                alt="Movie cover"
                sx={{width: '57px', height: '90px', borderRadius: theme.spacing(1.5)}}
            />
                <CardContent >
                    <Typography component="div" variant="subtitle1" fontWeight="800">
                        {title}
                    </Typography>
                    <Stack direction='row'>
                        <LabelWithIcon label="120m" >
                            <CalendarTodayOutlinedIcon fontSize="5px"/>
                        </LabelWithIcon>
                        <LabelWithIcon label="6">
                            <StarBorderIcon fontSize="19px" />
                        </LabelWithIcon>
                    </Stack>
                </CardContent>
        </Card>
    )
}

export default MovieBoardItem