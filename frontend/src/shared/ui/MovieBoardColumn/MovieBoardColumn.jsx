import {useDroppable} from "@dnd-kit/core";
import {Box, Stack, styled, Typography, useTheme} from "@mui/material";


const MovieBoardIcon = styled(Stack)((theme) => ({
    minWidth: "45px",
    minHeight: "45px",
    alignSelf: "start",
    justifyContent: "center",
    alignItems: "center",
}))


const MovieBoardColumn = ({ id, children, icon, label }) => {
    const {isOver, setNodeRef} = useDroppable({id});
    const theme = useTheme()

    return (
        <Stack border={theme.customComponents.border} padding={3} borderRadius={1.5}>
            <Stack>

                <Stack direction="row">
                    <MovieBoardIcon sx={{ background: "grey", borderRadius: theme.spacing(1.5)}}>
                        {icon}
                    </MovieBoardIcon>
                    <Stack>
                        <Typography>{label}</Typography>
                        <Typography>1 movies</Typography>
                    </Stack>
                </Stack>

                <Stack>
                    <Stack justifyContent="space-between" direction="row">
                        <Typography variant="subtitle2">Total time</Typography>
                        <Typography variant="subtitle2" fontWeight="800">123m</Typography>
                    </Stack>
                    <Stack justifyContent="space-between" direction="row">
                        <Typography variant="subtitle2">Avg rating</Typography>
                        <Typography variant="subtitle2" fontWeight="800">5.1</Typography>
                    </Stack>
                </Stack>

            </Stack>

            <Stack
                direction="row"
                ref={setNodeRef}
                minWidth="270px"
                minHeight="450px"
                sx={{ backgroundColor: isOver ? '#e0ffe0' : 'transparent' }}
            >
                {children}
            </Stack>
        </Stack>

    );
}

export default MovieBoardColumn