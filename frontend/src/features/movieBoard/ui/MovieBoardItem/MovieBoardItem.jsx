import { Card, CardContent, CardMedia, Stack, Typography, useTheme } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import getPosterURL from '@shared/helpers/getPosterURL';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import { useDraggable } from '@dnd-kit/core';
import getYearFromDate from '@shared/helpers/getYearFromDate';

const MovieBoardItem = ({ id, posterPath, title, runtime, voteAverage, releaseDate }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const imgURL = getPosterURL(posterPath);
  const theme = useTheme();

  return (
    <Card
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      sx={{
        width: '270px',
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : 'none',
        cursor: 'grab',
        userSelect: 'none',
        display: 'flex',
        padding: theme.spacing(2.5),
        background: 'transparent',
        border: theme.customComponents.border,
      }}
    >
      <Stack direction="row" gap={2}>
        <CardMedia
          component="img"
          image={imgURL}
          alt="Movie cover"
          sx={{ width: '57px', height: '90px', borderRadius: theme.spacing(1.5) }}
        />
        <CardContent>
          <Typography component="div" variant="subtitle1" fontWeight="800">
            {title}
          </Typography>
          <Stack direction="row">
            <LabelWithIcon data={getYearFromDate(releaseDate)}>
              <CalendarTodayOutlinedIcon />
            </LabelWithIcon>
            <LabelWithIcon data={voteAverage}>
              <StarBorderIcon />
            </LabelWithIcon>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default MovieBoardItem;
