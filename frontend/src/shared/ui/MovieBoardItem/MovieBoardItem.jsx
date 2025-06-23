import {Box, Card, CardContent, CardMedia, Typography, useTheme} from "@mui/material";
import getPosterURL from "../../helpers/getPosterURL";
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
                transform: transform
                    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
                    : 'none',
                cursor: 'grab',
                userSelect: 'none',
                mb: 1,
                display: 'flex',
                padding: theme.spacing(2.5),
                background: theme.palette.gradientMidnightSpace,
                border: theme.customComponents.border
        }}>
            <CardMedia
                component="img"
                image={imgURL}
                alt="Movie cover"
                sx={{width: '57px', height: '90px', borderRadius: theme.spacing(1.5)}}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        Mac Miller
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )


}

export default MovieBoardItem